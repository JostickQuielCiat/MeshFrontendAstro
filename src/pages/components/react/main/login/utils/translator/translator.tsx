"use client";

import { getDictionarieText } from "../../../services/internal/general/world/dictionaries/dictionarie/imp";

const Translator = (props: {
	section: string;
	section_key: string;
	text: string;
}) => {
	
	return (
		<>{getDictionarieText(props.section, props.section_key, props.text)}</>
	);
};

export default Translator;
