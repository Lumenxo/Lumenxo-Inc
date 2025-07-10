import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  cursorVariant: string;
  setCursorVariant: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading, cursorVariant, setCursorVariant }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};