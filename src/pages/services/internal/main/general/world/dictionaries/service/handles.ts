import type { Response } from "../../../../structs/response";
import { api } from "../../../../utils/variable";
import type { Read } from "./structs";


export async function ReadDictionarie(
	to: string,
	section: Array<string>,
	token: string,
): Promise<Response<Read>> {
	const url = `${api}/v1/general/translate/read`;
	const json = {
		to,
		section,
	};

	const res = await fetch(url, {
		method: "POST",
        cache: "force-cache",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
		body: JSON.stringify(json),
	});

	return res.json();
}
