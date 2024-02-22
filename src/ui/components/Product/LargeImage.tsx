import Image from "next/image";

type Props = {
	image: string;
};

export function LargeImage({ image }: Props) {
	return (
		<Image
			src={image}
			alt={"Product image"}
			width={500}
			height={500}
			className="max-h-[500px] rounded-lg bg-primary-foreground object-cover object-center shadow-lg"
			quality={50}
		/>
	);
}
