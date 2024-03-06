export const cookieGet = (key: string) => {
	return document.cookie.split("; ").find((row) => row.startsWith(key + "="));
};
