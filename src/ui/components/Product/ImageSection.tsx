import Link from "next/link";
import { Typography } from "@/ui/atoms/Typography";
import { Icons } from "@/ui/Icons";
import { SmallImage } from "@/ui/components/Product/SmallImage";
import { LargeImage } from "@/ui/components/Product/LargeImage";
import { type ProductPageProps } from "@/ui/types";

export function ImageSection({ params, searchParams }: ProductPageProps) {
	return (
		<>
			<Link href={"/"} className="flex gap-4 pt-2 text-primary-textDark/70 md:hidden">
				<Icons.arrowLeft />
				<Typography variant="subtitle2" className="font-semibold ">
					Powrót do poprzedniej strony
				</Typography>
			</Link>
			<div className="grid w-full max-w-[500px] place-content-start gap-4 place-self-center lg:gap-8">
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
		</>
	);
}
