import { create } from "zustand";

export interface Refresh {
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export const useRefresh = create<Refresh>((set) => ({
  refresh: false,
  setRefresh: (refresh: boolean) => set({ refresh }),
}));
