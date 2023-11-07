import Cookies from "js-cookie";
import { create } from "zustand";
import { Countries } from "../service/handles";
import { CountriesStore } from "./structs";

export const useCountries = create<CountriesStore>((set) => ({
	countriesList: [],
	setCountries: (countriesList) => set({ countriesList }),
	getCountries: async () => {
		const token = Cookies.get("AuthRegisterToken")
			? Cookies.get("AuthRegisterToken")
			: Cookies.get("AuthLoginToken");
            
		if (token) {
			const res = await Countries(token);
			const { status, result } = res;
			if (status === "success") {
				return set({ countriesList: result });
			}
		}

		return [];
	},
	clearCountries: () => set({ countriesList: [] }),
}));
