/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { TranslateContext } from "./Translate-context";
export const T = (key: string):any => {
  const translate = useContext(TranslateContext);
  if (!translate) {
    throw new Error("T function must be used within TranslationProvider");
  }
  return translate(key);
};
