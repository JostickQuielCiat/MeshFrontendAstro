"use server";

import {
	jwtInvite,
	jwtRegister,
} from "@/app/services/internal/utils/variable";
import jwt from "jsonwebtoken";
import { Claims } from "../../token/structs";
import { Data, DataInvite } from "./structs";

export async function verify(token: string): Promise<boolean> {
	let valid = false;
	jwt.verify(token, jwtRegister, function (err) {
		if (!err) {
			valid = true;
		}
	});

	return valid;
}

export async function claims(token: string): Promise<Claims<Data>> {
	let decoded: Claims<Data> = {
		sub: "",
		exp: 0,
		data: {
			firstname: "",
			lastname: "",
		},
	};

	jwt.verify(token, jwtRegister, function (_, claims) {
		decoded = claims as Claims<Data>;
	});

	return decoded;
}

export async function claimsInvite(token: string): Promise<Claims<DataInvite>> {
	let decoded: Claims<DataInvite> = {
		sub: "",
		exp: 0,
		data: {
			firstname: "",
			lastname: "",
		},
	};

	jwt.verify(token, jwtInvite, function (_, claims) {
		decoded = claims as Claims<DataInvite>;
	});

	return decoded;
}
