import React, { createContext, useContext } from 'react';
import { IAIService } from '../../types/ai';
import { MockAIService } from './mock';
import { AnthropicAIService } from './anthropic';

const AIContext = createContext<IAIService>(new MockAIService());

export function AIProvider({ children }: { children: React.ReactNode }) {
  const service = React.useMemo(() => {
    const mode = process.env.EXPO_PUBLIC_AI_MODE || 'mock';
    const apiKey = process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY;

    if (mode === 'live' && apiKey) {
      console.log('[Forge] Using LIVE Anthropic AI service');
      return new AnthropicAIService(apiKey);
    }

    if (mode === 'live' && !apiKey) {
      console.warn('[Forge] AI_MODE=live but no API key found — falling back to mock');
    }

    console.log('[Forge] Using MOCK AI service');
    return new MockAIService();
  }, []);

  return <AIContext.Provider value={service}>{children}</AIContext.Provider>;
}

export function useAI(): IAIService {
  return useContext(AIContext);
}
