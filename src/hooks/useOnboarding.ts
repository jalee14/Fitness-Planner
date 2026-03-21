import React, { useState, useCallback, useContext, createContext, useEffect } from 'react';
import { useAI } from '../services/ai/provider';
import { useStorage } from '../services/storage/provider';
import { UserProfile } from '../types/profile';
import { OnboardingState } from '../types/ai';

const INITIAL_STATE: OnboardingState = {
  phase: 'welcome',
  partialProfile: null,
  followUpQuestions: null,
  followUpAnswers: null,
  confirmedProfile: null,
  planPreview: null,
};

interface OnboardingContextValue {
  state: OnboardingState;
  loading: boolean;
  error: string | null;
  submitIntake: (text: string) => Promise<void>;
  submitFollowUps: (answers: { question: string; answer: string }[]) => Promise<void>;
  confirmProfile: (profile: UserProfile) => Promise<void>;
  pushBackOnPreview: (feedback: string) => Promise<void>;
  generatePlan: () => Promise<void>;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const ai = useAI();
  const storage = useStorage();
  const [state, setState] = useState<OnboardingState>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Restore saved onboarding state on mount
  useEffect(() => {
    storage.getOnboardingState().then((saved) => {
      if (saved) setState(saved);
    });
  }, [storage]);

  const updateState = useCallback(
    (updates: Partial<OnboardingState>) => {
      setState((prev) => {
        const next = { ...prev, ...updates };
        storage.saveOnboardingState(next);
        return next;
      });
    },
    [storage]
  );

  const submitIntake = useCallback(
    async (text: string) => {
      setLoading(true);
      setError(null);
      try {
        const partialProfile = await ai.extractProfile(text);
        updateState({ phase: 'followups', partialProfile });
        const questions = await ai.generateFollowUps(partialProfile);
        updateState({ followUpQuestions: questions });
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to process intake');
      } finally {
        setLoading(false);
      }
    },
    [ai, updateState]
  );

  const submitFollowUps = useCallback(
    async (answers: { question: string; answer: string }[]) => {
      setLoading(true);
      setError(null);
      try {
        const confirmedProfile = await ai.refineProfile(state.partialProfile!, answers);
        await storage.saveProfile(confirmedProfile);
        updateState({ phase: 'profile', followUpAnswers: answers, confirmedProfile });
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to refine profile');
      } finally {
        setLoading(false);
      }
    },
    [ai, storage, state.partialProfile, updateState]
  );

  const confirmProfile = useCallback(
    async (profile: UserProfile) => {
      setLoading(true);
      setError(null);
      try {
        await storage.saveProfile(profile);
        const preview = await ai.generatePlanPreview(profile);
        updateState({ phase: 'plan_preview', confirmedProfile: profile, planPreview: preview });
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to generate preview');
      } finally {
        setLoading(false);
      }
    },
    [ai, storage, updateState]
  );

  const pushBackOnPreview = useCallback(
    async (feedback: string) => {
      setLoading(true);
      setError(null);
      try {
        const updated = await ai.refinePlanPreview(
          state.planPreview!,
          feedback,
          state.confirmedProfile!
        );
        updateState({ planPreview: updated });
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to update preview');
      } finally {
        setLoading(false);
      }
    },
    [ai, state.planPreview, state.confirmedProfile, updateState]
  );

  const generatePlan = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      updateState({ phase: 'generating' });
      const plan = await ai.generateFullPlan(state.confirmedProfile!, state.planPreview!);
      await storage.savePlan(plan);
      updateState({ phase: 'complete' });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to generate plan');
    } finally {
      setLoading(false);
    }
  }, [ai, storage, state.confirmedProfile, state.planPreview, updateState]);

  const value: OnboardingContextValue = {
    state,
    loading,
    error,
    submitIntake,
    submitFollowUps,
    confirmProfile,
    pushBackOnPreview,
    generatePlan,
  };

  return React.createElement(OnboardingContext.Provider, { value }, children);
}

export function useOnboarding(): OnboardingContextValue {
  const ctx = useContext(OnboardingContext);
  if (!ctx) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return ctx;
}
