import Image from "next/image";

export function Hamburger() {
	return (
		<button
			data-collapse-toggle="navbar-search"
			type="button"
			className="hover:bg-primary/5 inline-flex items-center justify-center rounded-lg p-1 text-sm focus:outline-none focus:ring-0 md:hidden"
			aria-controls="navbar-search"
			aria-expanded="false"
		>
			<span className="sr-only">Open main menu</span>
			<Image width={36} height={36} src={"/hamburger.svg"} alt="hamburger" />
		</button>
	);
}
