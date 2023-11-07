export interface Option {
	label: string;
	options: Array<Options>;
	__isNew__: boolean | undefined;
}

export interface Options {
	value: number;
	label: string;
	country: string;
	domain: string;
	type_name: string;
}
