export function containsUppercase(str: string) {
	return Boolean(str.match(/[A-Z]/));
}

export function containsLowercase(str: string) {
	return Boolean(str.match(/[a-z]/));
}

export function containsNumbers(str: string) {
	return Boolean(str.match(/[0-9]/));
}

export function containsSymbol(str: string) {
	return Boolean(str.match(/[.!@#$^&*%+-]/));
}

export function containsLength(str: string) {
	return str.length >= 8 && str.length <= 16;
}

export function validate(password: string): boolean {
	const uppercase = containsUppercase(password);
	const lowercase = containsLowercase(password);
	const numbers = containsNumbers(password);
	const symbol = containsSymbol(password);
	const len = containsLength(password);

	if (uppercase && lowercase && numbers && symbol && len) {
		return true;
	} else {
		return false;
	}
}
