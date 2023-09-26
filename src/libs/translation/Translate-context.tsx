// Translate.tsx
import { ReactNode, createContext } from "react";
import useTranslate from "./use-translation";

export const TranslateContext = createContext<((key: string) => string) | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const translate = useTranslate();

  return <TranslateContext.Provider value={translate}>{children}</TranslateContext.Provider>;
};
