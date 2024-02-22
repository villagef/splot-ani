import Link from "next/link";
import { Typography } from "@/ui/atoms/Typography";
import { Icons } from "@/ui/Icons";
import { Wrapper } from "@/ui/components/Product/Wrapper";
import { ActionButtons } from "@/ui/components/Product/ActionButtons";
import { Links } from "@/consts";
import type { Product } from "@/ui/types";
import { priceHandler } from "@/utils/priceHandler";
import { discountHandler } from "@/utils/discountHandler";

type Props = {
	product: Product;
};

export function ContentSection({ product }: Props) {
	const { name, price, quantity, previousPrice, lowestPrice, description, categories } = product;
	const category = categories ? categories[0].name : "";
	const showDiscount = previousPrice && price < previousPrice;

	return (
		<div className="grid place-content-center">
			<div className="grid place-content-center gap-8 rounded-xl bg-primary-foreground p-4 tracking-wide shadow-md md:gap-10 md:p-8">
				<Link href={Links.Products} className="hidden gap-4 text-primary-textDark/70 md:flex">
					<Icons.arrowLeft />
					<Typography variant="subtitle2" className="font-semibold ">
						Powrót do poprzedniej strony
					</Typography>
				</Link>
				<div>
					<Typography variant="subtitle2" className="font-semibold text-primary-textDark/40">
						{category}
					</Typography>
					<Typography variant="h2" className="text-pretty text-primary">
						{name}
					</Typography>
				</div>
				<Typography variant="body1" className="leading-8">
					{description}
				</Typography>
				<div>
					<Wrapper>
						<Typography variant="h3">{priceHandler(price)}</Typography>
						{showDiscount && (
							<div className="right-0 top-0 z-10 h-fit rounded-md bg-secondary px-2 py-0.5 text-sm lowercase text-primary-textLight">
								{discountHandler(price, previousPrice)}
							</div>
						)}
					</Wrapper>
					{showDiscount && (
						<Typography variant="h5" className="text-primary-textDark/50 line-through">
							{priceHandler(previousPrice)}
						</Typography>
					)}
					<Typography variant="body2" className="text-pretty pt-2 text-primary-textDark/70">
						Najniższa cena z 30 dni przed obniżką: {priceHandler(lowestPrice)}
					</Typography>
				</div>
				<Wrapper>
					<Typography variant="body1" className="text-pretty text-primary-textDark/70">
						Dostępność: <span className="font-bold text-primary">{quantity} szt.</span>
					</Typography>
				</Wrapper>
				<ActionButtons quantity={quantity} />
			</div>
		</div>
	);
}
