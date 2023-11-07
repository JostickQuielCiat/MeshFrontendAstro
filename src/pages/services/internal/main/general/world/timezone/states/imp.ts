import Cookies from "js-cookie";
import { create } from "zustand";
/* import { Timezones } from "../service/handles";
import type { TimezoneStore } from "./structs";

export const useTimezone = create<TimezoneStore>((set) => ({
	timezoneList: [],
	setTimezones: (timezoneList) => set({ timezoneList }),
	getTimezones: async (country_id) => {
		const token = Cookies.get("AuthRegisterToken")
			? Cookies.get("AuthRegisterToken")
			: Cookies.get("AuthLoginToken");
		    
		if (token) {
			const res = await Timezones(country_id, token);
			const { status, result } = res;
			if (status === "success") {
				return set({ timezoneList: result });
			}
		}

		return [];
	},
	clearTimezones: () => set({ timezoneList: [] }),
}));
 */