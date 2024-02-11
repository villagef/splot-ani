import Image from "next/image";

export function SearchBar() {
	return (
		<div className="relative">
			<Image
				width={24}
				height={24}
				src={"/search.svg"}
				alt="search icon"
				className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
			/>
			<input
				type="text"
				id="search-navbar"
				className="block w-full rounded-3xl border  bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:ring-0"
				placeholder="Szukaj..."
			/>
		</div>
	);
}
