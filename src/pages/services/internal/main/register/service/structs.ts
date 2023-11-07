export interface General {
	firstname: string;
	lastname: string;
	password: string;
	email: string;
}

export interface Detail {
	phone: string;
	org_adm_id: number;
	org_adm_temp: string;
	dni? : string;
	work_position?: string;
}

export interface Location {
	country: number;
	state: number;
	city: string;
	timezone: string;
	address?: string;
	address_work?: string;
}

export interface Payload {
	general: General;
	detail: Detail;
	location: Location;
}

export interface Result {
	uuid: string;
}

export interface ResultMail {
	token: string;
}

export interface ResultVerify {
	token: string;
}
