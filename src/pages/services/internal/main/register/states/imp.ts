import { create } from "zustand";
import {
	containsLength,
	containsLowercase,
	containsNumbers,
	containsSymbol,
	containsUppercase,
} from "../../utils/password/contains";
import { select_entity } from "./imp-server";
import type {
	Code,
	DisablePassword,
	Disabled,
	Entity,
	OrgSelected,
	Password,
	RegisterForm,
	SelectedCountry,
	SelectedState,
	SelectedTimezone,
	ShowPassword,
	ValidatePassword,
} from "./structs";

export const useRegForm = create<RegisterForm>()((set) => ({
	regForm: {
		general: {
			firstname: "",
			lastname: "",
			email: "",
			org_adm_id: 0,
			org_adm_temp: "",
		},
		detail: {
			phone: "",
			country: 0,
			state: 0,
			city: "",
			timezone: "",
			code: "",
		},
		password: {
			password: "",
		},
	},
	setRegForm: (regForm) => set({ regForm }),
	clearRegForm: () => {
		set({
			regForm: {
				general: {
					firstname: "",
					lastname: "",
					email: "",
					org_adm_id: 0,
					org_adm_temp: "",
				},
				detail: {
					phone: "",
					country: 0,
					state: 0,
					city: "",
					timezone: "",
					code: "",
				},
				password: {
					password: "",
				},
			},
		});
	},
}));

export const useSelectedOrg = create<OrgSelected>((set) => ({
	orgSelected: undefined,
	setSelectedOrg: (orgSelected) => set({ orgSelected }),
	clearSelectedOrg: () => set({ orgSelected: undefined }),
}));

export const useDisabled = create<Disabled>((set) => ({
	disable: false,
	setDisable: (disable) => set({ disable }),
	clearDisabled: () => set({ disable: false }),
}));

export const useEntity = create<Entity>((set) => ({
	iso2: "",
	setEntity: (iso2) => set({ iso2 }),
	selectEntity: async (email, orgs) => {
		const entity = await select_entity(email, orgs);
		return entity;
	},
	clearEntity: () => set({ iso2: "" }),
}));

export const useSelectedCountry = create<SelectedCountry>((set) => ({
	selectedCountry: undefined,
	setSelectedCountry: (selectedCountry) => set({ selectedCountry }),
	clearSelectedCountry: () => set({ selectedCountry: undefined }),
}));

export const useSelectedState = create<SelectedState>((set) => ({
	selectedState: undefined,
	setSelectedState: (selectedState) => set({ selectedState }),
	clearSelectedState: () => set({ selectedState: undefined }),
}));

export const useSelectedTimezone = create<SelectedTimezone>((set) => ({
	selectedTimezone: undefined,
	setSelectedTimezone: (selectedTimezone) => set({ selectedTimezone }),
	clearTimeZone: () => set({ selectedTimezone: undefined }),
}));

export const useCode = create<Code>((set) => ({
	code: "",
	setCode: (code) => set({ code }),
	clearCode: () => set({ code: "" }),
}));

export const usePassword = create<Password>((set) => ({
	password: "",
	setPassword: (password: string) => ({ password }),
}));

export const useShowPassword = create<ShowPassword>((set) => ({
	show: false,
	setShow: (show: boolean) => set({ show }),
}));

export const useValidatePassword = create<ValidatePassword>((set) => ({
	uppercase: false,
	lowercase: false,
	symbols: false,
	number: false,
	len: false,
	setValidatePassword: (
		uppercase: boolean,
		lowercase: boolean,
		symbols: boolean,
		number: boolean,
		len: boolean,
	) => set({ uppercase, lowercase, symbols, number, len }),
	validatePassword: (password: string) => {
		const uppercase = containsUppercase(password);
		const lowercase = containsLowercase(password);
		const symbols = containsSymbol(password);
		const number = containsNumbers(password);
		const len = containsLength(password);

		set({ uppercase, lowercase, symbols, number, len });
	},
	clearValidatePassword: () =>
		set({
			uppercase: false,
			lowercase: false,
			symbols: false,
			number: false,
			len: false,
		}),
}));


export const useDisablePassword = create<DisablePassword>((set)=>({
	disablePassword: true,
	setDisabled: (disablePassword) => set({ disablePassword })
}))