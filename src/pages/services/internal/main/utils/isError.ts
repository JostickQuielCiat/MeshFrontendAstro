export function isError(error: any) {
	if (error.response) {
		if (error.response.status !== 500) {
			return error.response.data;
		}
	}
}
