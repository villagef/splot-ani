export const cookieRemove = (key: string) => {
	return (document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`);
};
