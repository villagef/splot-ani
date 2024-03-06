export const cookieRemove = (key: string) => {
	if (typeof document === "undefined") {
		return undefined;
	}
	return (document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`);
};
