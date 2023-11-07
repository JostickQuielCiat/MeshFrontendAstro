import { Response } from "../../../../structs/response";
import { Result } from "./structs";

export function newInternalError(status: string, message: string): Response<Array<Result>> {
	const data: Response<Array<Result>> = {
		status,
		message,
		result: [],
	};

	return data;
}