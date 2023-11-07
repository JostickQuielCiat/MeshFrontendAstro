export interface Claims<T> {
	sub: string;
	exp: number;
	data: T;
}
