"use server";

import type { SingleValue } from "react-select";
import type { Option } from "../../../general/world/orgs/service/structs";

export async function get_entity(
	list: Array<Option>,
	email: string,
): Promise<SingleValue<Option>> {
	const email_domain = email.split("@");
	const domain = email_domain[1];

	let obj: SingleValue<Option> = {
		label: "",
		options: [],
		__isNew__: undefined,
	};

	list.map((item) => {
		const { options } = item;
		if (options.length > 0) {
			options.map((key) => {
				if (key.domain === domain) {
					obj = {
						label: key.type_name,
						options: [key],
						__isNew__: undefined,
					};

					return obj;
				}
			});
		}
	});

	return obj;
}
