import { create } from "zustand";
import type { Dictionaries } from "./structs";
import { ReadDictionarie } from "../service/handles";

export const useDictionaries = create<Dictionaries>((set)=>({
    dictionaries: {},
    language: "ES",
    setDictionaries: (dictionaries) => set({ dictionaries }),
    getDictionaries: async (lang) => {
        const res = await ReadDictionarie(lang, ["login","password","register"], "");
        const { result } = res;
        return result;
    },
    setLanguage: (language) => set({ language })
}))