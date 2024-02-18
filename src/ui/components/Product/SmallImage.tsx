"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

type Props = {
	src: string;
	idx: number;
};

export function SmallImage({ src, idx }: Props) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const selected = searchParams.get("imgIdx") === String(idx);

	const onClick = () => {
		router.replace(`?imgIdx=${idx}`);
	};

	return (
		<div
			className="relative h-20 w-20 min-w-20 hover:cursor-pointer sm:h-28 sm:w-28 sm:min-w-28"
			onClick={onClick}
		>
			<Image
				src={src}
				alt={src}
				fill
				className={`border-1 rounded-lg border-primary ${selected && "opacity-60"} shadow-lg`}
				quality={20}
				priority
			/>
		</div>
	);
}
