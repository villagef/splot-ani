export const discountHandler = (price: number, previousPrice: number | undefined) => {
	const _previousPrice = previousPrice ? previousPrice : price;
	const discount = (_previousPrice - price) / _previousPrice;
	return Math.round(discount * 100) + "%";
};
