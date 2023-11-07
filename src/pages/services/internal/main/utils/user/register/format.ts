"use server";

import {
	Detail,
	General,
	Location,
	Payload,
} from "@/app/services/internal/users/register/service/structs";
import { RegForm } from "../../../users/register/states/structs";

export async function newUserData(inputTemp: RegForm) {
	const { general, detail, password } = inputTemp;
	const { firstname, lastname, email, org_adm_id, org_adm_temp, dni, work_position } = general;
	const { country, state, city, timezone, address, address_work } = detail;

	const generalData = await newGeneral(
		firstname,
		lastname,
		password.password,
		email,
	);
	const new_phone = detail.phone ? `+${detail.code} ${detail.phone}` : "";
	const detailData = await newDetail(new_phone, org_adm_id!, org_adm_temp!, dni, work_position);

	const locationData = await newLocation(country!, state!, city, timezone!, address, address_work);

	const data: Payload = {
		general: generalData,
		detail: detailData,
		location: locationData,
	};

	return data;
}

export async function newGeneral(
	firstname: string,
	lastname: string,
	password: string,
	email: string,
): Promise<General> {
	const data: General = {
		firstname,
		lastname,
		password,
		email,
	};

	return data;
}

export async function newDetail(
	phone: string,
	org_adm_id: number,
	org_adm_temp: string,
	dni?: string,
	work_position?: string,
): Promise<Detail> {
	const data: Detail = {
		phone,
		org_adm_id,
		org_adm_temp,
		dni,
		work_position
	};

	return data;
}

export async function newLocation(
	country: number,
	state: number,
	city: string,
	timezone: string,
	address?: string,
	address_work?: string,
): Promise<Location> {
	const data: Location = {
		country,
		state,
		city,
		timezone,
		address,
		address_work
	};

	return data;
}
