import type { Response } from "../../structs/response";
import type { Result, ResultMail } from "./structs";

export function errorRegister(
	status: string,
	message: string,
): Response<string> {
	const res: Response<string> = {
		status,
		message,
		result: "",
	};

	return res;
}

export function errorMail(status: string, message: string): Response<ResultMail> {
	const res: Response<ResultMail> = {
		status,
		message,
		result: {
			token: "",
		},
	};

	return res;
}
