import Cookies from "js-cookie";
import { create } from "zustand";
import { States } from "../service/handle";
import { StatesStore } from "./structs";

export const useStates = create<StatesStore>((set) => ({
	stateList: [],
	setStates: (stateList) => set({ stateList }),
	getStates: async (country_id) => {
		const token = Cookies.get("AuthRegisterToken")
			? Cookies.get("AuthRegisterToken")
			: Cookies.get("AuthLoginToken");
            
		if (token) {
			const res = await States(country_id, token);
			const { status, result } = res;

			if (status === "success") {
				return set({ stateList: result });
			}
		}

		return [];
	},
	clearStates: () => set({ stateList: [] }),
}));
