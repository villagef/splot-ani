"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
	idx: number;
	image: string;
	selected: boolean;
};

export function SmallImage({ idx, image, selected }: Props) {
	const router = useRouter();

	const onClick = () => {
		router.replace(`?imgIdx=${idx}`);
	};

	return (
		<div
			className="relative h-20 w-20 min-w-20 overflow-hidden rounded-lg bg-primary-foreground  hover:cursor-pointer sm:h-28 sm:w-28 sm:min-w-28"
			onClick={onClick}
		>
			<Image
				src={image}
				alt={"Small product image"}
				fill
				className={`border-1 rounded-lg border-primary ${selected && "opacity-60"} object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105`}
				quality={10}
			/>
		</div>
	);
}
