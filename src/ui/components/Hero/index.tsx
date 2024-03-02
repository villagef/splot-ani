import Image from "next/image";

export function Hero() {
	return (
		<div className="relative h-[550px] w-full bg-black/5" aria-label="hero section">
			<Image
				src="/hero-section-image_makrama-na-scianie.jpg"
				alt="duża makrama na ścianie ze strony https://i.etsystatic.com/12804288/r/il/a23a6f/2665266866/il_fullxfull.2665266866_smu4.jpg"
				fill
				className="-z-10 object-cover object-right xl:object-center"
				quality={70}
			/>
		</div>
	);
}
