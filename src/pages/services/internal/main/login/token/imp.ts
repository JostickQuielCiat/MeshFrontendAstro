import { jwtLogin } from "../../utils/variable";
import jwt from "jsonwebtoken";
import type { Claims } from "../../token/structs";
import type { Data } from "./structs";

export async function verify(token: string): Promise<boolean> {
	let valid = false;
	jwt.verify(token, jwtLogin, function (err) {
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
			uuid: "",
			firstname: "",
			lastname: "",
			email: "",
			enabled: false,
			otp_enabled: false,
			otp_admin: false
		},
	};

	jwt.verify(token, jwtLogin, function (_, claims) {
		decoded = claims as Claims<Data>;
	});

	return decoded;
}
