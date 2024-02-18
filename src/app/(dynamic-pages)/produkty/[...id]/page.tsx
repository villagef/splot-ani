import { type Metadata } from "next/types";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/ui/atoms/Typography";
import { Button } from "@/ui/atoms/Button";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { Icons } from "@/ui/Icons";
import { ProductList } from "@/ui/components/ProductList";
import products from "@/data.json";

type Props = {
	params: {
		id: string;
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// const res = await fetch(
	// 	"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsqaxyym000008l373lb2u18/master",
	// );
	// const data = await res.json();
	return {
		title: "Product z id: " + params.id,
		description: "Product description",
		// image: "https://splotani.pl/images/logo.png",
		// url: "https://splotani.pl/produkty/1",
		// type: "website",
		// siteName: "Splotani",
	};
}

const SmallImageContainer = ({ src }: { src: string }) => {
	return (
		<div className="relative h-20 w-20 min-w-20 sm:h-28 sm:w-28 sm:min-w-28">
			<Image
				src={src}
				alt={src}
				fill
				className="border-1 rounded-lg border-primary opacity-60 shadow-lg"
				quality={20}
			/>
		</div>
	);
};

export default function Product({ params }: Props) {
	return (
		<div className="grid w-full gap-20">
			<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 xl:gap-24">
				<Link href={"/"} className="flex gap-4 text-primary-textDark/70 md:hidden">
					<Icons.arrowLeft />
					<Typography variant="subtitle2" className="font-semibold ">
						Powrót do poprzedniej strony
					</Typography>
				</Link>
				<div className="grid w-full place-content-start gap-4 lg:gap-8">
					<Image
						src={"/makrama-1.jpg"}
						alt={params.id}
						width={700}
						height={650}
						className="max-h-[650px] rounded-lg object-cover object-center shadow-lg"
						quality={50}
					/>
					<div className="relative flex w-full gap-4 overflow-x-auto lg:gap-4">
						<SmallImageContainer src={"/makrama-1.jpg"} />
						<SmallImageContainer src={"/makrama-1.jpg"} />
						<SmallImageContainer src={"/makrama-1.jpg"} />
						<SmallImageContainer src={"/makrama-1.jpg"} />
						<SmallImageContainer src={"/makrama-1.jpg"} />
					</div>
				</div>
				<div className="grid place-content-center">
					<div className="grid place-content-center gap-8 rounded-xl bg-primary-foreground p-4 tracking-wide shadow-md md:gap-12 md:p-8">
						<Link href={"/"} className="hidden gap-4 text-primary-textDark/70 md:flex">
							<Icons.arrowLeft />
							<Typography variant="subtitle2" className="font-semibold ">
								Powrót do poprzedniej strony
							</Typography>
						</Link>
						<div>
							<Typography variant="subtitle2" className="font-semibold text-primary-textDark/40">
								Makramy
							</Typography>
							<Typography variant="h2" className="text-pretty text-primary">
								Makrama wisząca
							</Typography>
						</div>
						<Typography variant="body1">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, nunc nec
							lacinia lacinia, nunc nunc lacinia lacinia, nunc nec lacinia lacinia, nunc nec lacinia
						</Typography>
						<div className="">
							<div className="flex justify-start gap-4">
								<Typography variant="h3">200,00 zł</Typography>
								<div className="right-0 top-0 z-10 h-fit rounded-md bg-secondary px-2 py-0.5 text-sm lowercase text-primary-textLight">
									50%
								</div>
							</div>
							<Typography variant="h5" className="text-primary-textDark/50 line-through">
								400,00 zł
							</Typography>
							<Typography variant="body2" className="text-pretty text-primary-textDark/70">
								Najniższa cena z 30 dni przed obniżką: 400,00 zł
							</Typography>
						</div>
						<div className="grid gap-4">
							<Typography variant="body1" className="text-pretty text-primary-textDark/70">
								Dostępność: <span className="font-bold text-primary">5 szt.</span>
							</Typography>
						</div>
						<div className="flex gap-4">
							<div className="flex w-max items-center gap-2 rounded-md bg-secondary/10 px-1 md:gap-4">
								<ButtonIcon variant="text">
									<Icons.minus />
								</ButtonIcon>
								<Typography variant="h4">1</Typography>
								<ButtonIcon variant="text">
									<Icons.plus />
								</ButtonIcon>
							</div>
							<Button variant="primary" color="primary" className="w-full shadow-md shadow-primary">
								Dodaj do koszyka
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Typography variant="h2" className="text-center">
					Inni oglądali również...
				</Typography>
				<ProductList products={products.data} />
			</div>
		</div>
	);
}
