import { createWithEqualityFn } from "zustand/traditional";
import { combine } from "zustand/middleware";

export type Lang = "zh-CN" | "en-US";

const initialState = {
  lang: "zh-CN" as Lang,
  dark: false,
};

export const useSettingsStore = createWithEqualityFn(
  combine(initialState, (set) => ({
    setLang: (lang: Lang) => set({ lang }),
    toggleDark: () => set((state) => ({ dark: !state.dark })),
  })),
);
