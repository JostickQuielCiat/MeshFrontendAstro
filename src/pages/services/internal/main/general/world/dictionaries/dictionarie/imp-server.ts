import { getServerCookie } from "../../../../utils/cookies/imp";
import { ReadDictionarie } from "../service/handles";

export async function getText(section: string, key: string, text: string) {
	const cookie = await getServerCookie("language");
	const lang = cookie?.value;
	
    if (lang !== "es") {
		const res = await ReadDictionarie(lang, ["login"], "");
		const { result } = res;

		if (result && section) {
			const index = result[section].findIndex((e) => e.key === key);
			const text = result[section][index]?.text;
			return text;
		}
	}

	return text;
}