// import { type Metadata } from "next/types";
import Link from "next/link";
import { Typography } from "@/ui/atoms/Typography";
import { Icons } from "@/ui/Icons";
import { ProductList } from "@/ui/components/ProductList";
import products from "@/data.json";
import { SmallImage } from "@/ui/components/Product/SmallImage";
import { LargeImage } from "@/ui/components/Product/LargeImage";
import { Wrapper } from "@/ui/components/Product/Wrapper";
import { ActionButtons } from "@/ui/components/Product/ActionButtons";

type Props = {
	params: {
		id: string;
	};
	searchParams: {
		imgIdx: string;
	};
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
// 	// const res = await fetch(
// 	// 	"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsqaxyym000008l373lb2u18/master",
// 	// );
// 	// const data = await res.json();
// 	return {
// 		title: "Product z id: " + params.id,
// 		description: "Product description",
// 		// image: "https://splotani.pl/images/logo.png",
// 		// url: "https://splotani.pl/produkty/1",
// 		// type: "website",
// 		// siteName: "Splotani",
// 	};
// }

export default function Product({ params, searchParams }: Props) {
	return (
		<div className="grid w-full gap-20">
			<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 xl:gap-24">
				<Link href={"/"} className="flex gap-4 pt-2 text-primary-textDark/70 md:hidden">
					<Icons.arrowLeft />
					<Typography variant="subtitle2" className="font-semibold ">
						Powrót do poprzedniej strony
					</Typography>
				</Link>
				<div className="grid w-full place-content-start gap-4 lg:gap-8">
					<LargeImage
						params={{ id: params.id, src: ["/makrama-1.jpg", "/makrama-1.jpg"] }}
						selectedImgIdx={Number(searchParams.imgIdx)}
					/>
					<div className="relative flex w-full gap-4 overflow-x-auto lg:gap-4">
						{Array.from({ length: 5 }).map((_, i) => (
							<SmallImage key={i} src={"/makrama-1.jpg"} idx={i} />
						))}
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
						<Typography variant="body1" className="leading-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, nunc nec
							lacinia lacinia, nunc nunc lacinia lacinia, nunc nec lacinia lacinia, nunc nec lacinia
						</Typography>
						<div>
							<Wrapper>
								<Typography variant="h3">200,00 zł</Typography>
								<div className="right-0 top-0 z-10 h-fit rounded-md bg-secondary px-2 py-0.5 text-sm lowercase text-primary-textLight">
									50%
								</div>
							</Wrapper>
							<Typography variant="h5" className="text-primary-textDark/50 line-through">
								400,00 zł
							</Typography>
							<Typography variant="body2" className="text-pretty pt-2 text-primary-textDark/70">
								Najniższa cena z 30 dni przed obniżką: 400,00 zł
							</Typography>
						</div>
						<Wrapper>
							<Typography variant="body1" className="text-pretty text-primary-textDark/70">
								Dostępność: <span className="font-bold text-primary">5 szt.</span>
							</Typography>
						</Wrapper>
						<ActionButtons />
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
