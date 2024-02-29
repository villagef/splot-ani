import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { getTopProducts } from "@/api/products";
import { Icons } from "@/ui/Icons";
import { BoxShadow } from "@/ui/atoms/BoxShadow";
import { Button } from "@/ui/atoms/Button";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { Separator } from "@/ui/atoms/Separator";
import { Typography } from "@/ui/atoms/Typography";
import { ButtonIncreaseDecrease } from "@/ui/components/ButtonIncreaseDecrease.tsx";
import { SmallImage } from "@/ui/components/Product/SmallImage";
import { priceHandler } from "@/utils/priceHandler";

export default async function Cart() {
	const products = await getTopProducts();

	if (!products) {
		return (
			<div>
				<Typography variant="h1" className="text-pretty text-center text-primary">
					Brak produktów w koszyku
				</Typography>
			</div>
		);
	}

	return (
		<>
			<Typography variant="h2" className="text-pretty pt-2 text-center text-primary">
				Koszyk
			</Typography>
			<div className="grid w-full gap-10 py-4 text-secondary-textDark md:py-8 lg:grid-cols-5">
				<div className="grid gap-4 lg:col-span-3">
					{products.map((product, index) => {
						return (
							<BoxShadow key={index} className="flex flex-col gap-4 sm:flex-row">
								<div className="relative h-80 w-full overflow-hidden rounded-lg sm:hidden ">
									<Link href={`/produkt/${product.slug}?imgIdx=0` as Route}>
										<Image
											src={product.images[0]?.url || ""}
											alt={"Product image"}
											fill
											className="rounded-lg border-none bg-transparent object-cover object-center shadow-lg"
											quality={30}
											priority
										/>
									</Link>
								</div>
								<div className="hidden sm:block">
									<Link href={`/produkt/${product.slug}?imgIdx=0` as Route}>
										<SmallImage idx={index} image={product.images[0]?.url || ""} selected={false} />
									</Link>
								</div>
								<div className="flex w-full justify-between">
									<div className="flex flex-col justify-between gap-4">
										<div>
											<Link href={`/produkt/${product.slug}?imgIdx=0` as Route}>
												<Typography variant="h6" className="text-pretty hover:text-primary">
													{product.name}
												</Typography>
											</Link>
											<Typography variant="subtitle2" className="text-pretty">
												{priceHandler(product.price)}
											</Typography>
										</div>
										<ButtonIncreaseDecrease id={product.id} quantity={2} />
									</div>
									<div>
										<ButtonIcon variant="text">
											<Icons.close />
										</ButtonIcon>
									</div>
								</div>
							</BoxShadow>
						);
					})}
				</div>
				<div className="lg:col-span-2 lg:col-start-4">
					<BoxShadow className="grid gap-2">
						<Typography variant="h3">Podsumowanie zamówienia</Typography>
						<Separator fullWidth />
						<div className="flex justify-between">
							<Typography variant="h6">Produkty</Typography>
							<Typography variant="h6">
								{priceHandler(products.reduce((acc, curr) => acc + curr.price, 0))}
							</Typography>
						</div>
						<div className="flex justify-between">
							<Typography variant="h6">Dostawa</Typography>
							<Typography variant="h6">{priceHandler(1600)}</Typography>
						</div>
						<Separator fullWidth />
						<div className="flex justify-between">
							<Typography variant="h4">Suma</Typography>
							<Typography variant="h4">{priceHandler(43000)}</Typography>
						</div>
						<Typography variant="caption" className="text-end">
							Including VAT
						</Typography>
						<Button variant="primary" color="primary" className="w-full shadow-md shadow-primary">
							Zamów
						</Button>
					</BoxShadow>
				</div>
			</div>
		</>
	);
}
