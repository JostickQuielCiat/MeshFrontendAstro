"use server";

import type { Option, Options } from "../../general/world/orgs/service/structs";
import { get_entity } from "../../utils/general/org/entity";
import type { selectedEntity } from "./structs";

export const select_entity = async (
	email: string,
	orgs: Array<Option>,
): Promise<selectedEntity | undefined> => {

	const len = email.split("@");

	if (email.includes("@") && len[1].length > 1) {
		const selected_option = await get_entity(orgs, email);
		const data = selected_option?.options[0] as Options;

		if (data) {
            const selected = await selected_entity(data);
			return selected;
		}
	}

    return undefined;
};

export const selected_entity = async (
	data: Options,
): Promise<selectedEntity | undefined> => {
	const iso2 = data.country;
	const org_adm_id = data.value;
	const option = data as unknown as Option;

	return { iso2, org_adm_id, option };
};