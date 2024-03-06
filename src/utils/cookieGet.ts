export const cookieGet = (key: string) => {
	if (typeof document === "undefined") {
		return undefined;
	}
	return document.cookie.split("; ").find((row) => row.startsWith(key + "="));
};
