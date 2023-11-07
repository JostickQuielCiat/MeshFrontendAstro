import type { Response } from "../../../../structs/response";
import type { Option } from "./structs";

export function errorOrgs(status: string, message: string): Response<Option> {
	const res: Response<Option> = {
		status,
		message,
		result: {
			label: "",
			options: [],
			__isNew__: undefined
		},
	};

	return res;
}
