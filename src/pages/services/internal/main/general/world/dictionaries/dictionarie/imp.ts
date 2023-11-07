import type { Read } from "../service/structs";
import { useDictionaries } from "../states/imp";

export function getDictionarieText(section: string, key: string, text: string) {
	const { dictionaries } = useDictionaries();

	if (section) {
		if (dictionaries[section]) {
			const index = dictionaries[section].findIndex((e) => e.key === key);
			const text = dictionaries[section][index]?.text;
			return text;
		}
	}

	return text;
}

export function getDictionarieTextV2(section: string, key: string, text: string, dictionaries: Read) {
	if (section) {
		if (dictionaries[section]) {
			const index = dictionaries[section].findIndex((e) => e.key === key);
			const text = dictionaries[section][index]?.text;
			return text;
		}
	}

	return text;
}