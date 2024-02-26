export function priceHandler(price: number | null | undefined) {
	const _price = price ? price / 100 : 0;
	return Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(_price);
}
