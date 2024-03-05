export const dateHandler = (date: string) => {
	return new Intl.DateTimeFormat("pl-PL").format(new Date(date));
};
