import { create } from "zustand";
import { AppSwitch, AppUserData, UserData } from "./structs";

export const useAppSwitch = create<AppSwitch>((set) => ({
  appSwitch: "administracion",
  setAppSwitch: (appSwitch) => set({ appSwitch }),
}));

export const useUserData = create<AppUserData>((set) => ({
  userData: undefined,
  setUserData: (userData) => set({ userData }),
  clearUserData: () => set({ userData: undefined }),
}));
