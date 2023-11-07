import type { Response } from "../../structs/response";
import type { Result } from "./structs";

export function newInternalError(
	status: string,
	message: string,
): Response<Result> {
	const res: Response<Result> = {
		status,
		message,
		result: {
			token: "",
			enabled: false,
		},
	};

	return res;
}
