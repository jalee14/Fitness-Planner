import React, { createContext, useContext } from 'react';
import { IStorageService } from './index';
import { AsyncStorageService } from './async-storage';

const StorageContext = createContext<IStorageService>(new AsyncStorageService());

export function StorageProvider({ children }: { children: React.ReactNode }) {
  const storage = React.useMemo(() => new AsyncStorageService(), []);
  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorage(): IStorageService {
  return useContext(StorageContext);
}
