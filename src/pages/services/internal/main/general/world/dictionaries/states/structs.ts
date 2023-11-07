import type { Read } from "../service/structs";

export interface Dictionaries{
    dictionaries: Read,
    language: string,
    setDictionaries: (dictionaries: Read) => void;
    getDictionaries: (lang: string) => Promise<Read>;
    setLanguage: (language: string) => void;
}