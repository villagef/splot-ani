import Image from "next/image";

type Props = {
	params: {
		id: string;
		src: string[];
	};
	selectedImgIdx: number;
};

export function LargeImage({ params, selectedImgIdx }: Props) {
	const src = params.src[selectedImgIdx] || params.src[0];
	return (
		<Image
			src={src}
			alt={params.id}
			width={700}
			height={650}
			className="max-h-[650px] rounded-lg object-cover object-center shadow-lg"
			quality={50}
		/>
	);
}
