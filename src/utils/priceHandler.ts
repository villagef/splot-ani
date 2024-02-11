export function priceHandler(price: number) {
	const _price = price / 100;
	return Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(_price);
}
