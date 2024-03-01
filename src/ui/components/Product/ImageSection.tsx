import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/ui/atoms/Typography";
import { Icons } from "@/ui/Icons";
import { SmallImage } from "@/ui/components/Product/SmallImage";
import { Links } from "@/consts";
import { type ProductDetailsFragment } from "@/gql/graphql";

type Props = {
	product: ProductDetailsFragment;
	imgIdx: number;
};

export function ImageSection({ product, imgIdx }: Props) {
	const images = product?.images || [];
	const src = images?.map((img) => img.url);
	const selectedImage = src[imgIdx];

	return (
		<>
			<Link href={Links.Products} className="flex gap-4 pt-2 text-primary-textDark/70 md:hidden">
				<Icons.arrowLeft />
				<Typography variant="subtitle2" className="font-semibold ">
					Powrót do poprzedniej strony
				</Typography>
			</Link>
			<div className="grid h-full w-full place-content-baseline gap-4 lg:gap-6">
				<Image
					src={selectedImage ? selectedImage : "/makrama-1.png"}
					alt={"Product image"}
					width={700}
					height={600}
					className="rounded-lg border-none bg-transparent object-cover object-center shadow-lg lg:max-h-[600px]"
					quality={50}
					priority
				/>
				<div className="relative flex w-full gap-4 overflow-x-auto lg:gap-6">
					{images?.map((img, i) => (
						<SmallImage key={i} idx={i} image={img.url} selected={imgIdx === i} />
					))}
				</div>
			</div>
		</>
	);
}
