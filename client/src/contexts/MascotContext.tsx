import React, { createContext, useContext, useState, ReactNode } from 'react';

export type MascotGender = 'female' | 'male';

interface MascotContextType {
  gender: MascotGender;
  setGender: (gender: MascotGender) => void;
}

const MascotContext = createContext<MascotContextType | undefined>(undefined);

export function MascotProvider({ children }: { children: ReactNode }) {
  const [gender, setGender] = useState<MascotGender>('female');

  return (
    <MascotContext.Provider value={{ gender, setGender }}>
      {children}
    </MascotContext.Provider>
  );
}

export function useMascot() {
  const context = useContext(MascotContext);
  if (!context) {
    throw new Error('useMascot must be used within MascotProvider');
  }
  return context;
}
