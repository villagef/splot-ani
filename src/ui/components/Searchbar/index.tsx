"use client";

import type { Route } from "next";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Links } from "@/consts";

export function Searchbar() {
	const searchParams = useSearchParams();
	const { replace, push } = useRouter();

	const handleSearch = useDebouncedCallback((term: string) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set("query", term);
			push(`${Links.Search}?${params.toString()}` as Route);
		} else {
			replace(Links.Products as Route);
		}
	}, 500);

	return (
		<div className="relative" aria-label="Search input" id="search-input">
			<Image
				width={24}
				height={24}
				src={"/search.svg"}
				alt="search icon"
				className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform"
			/>
			<input
				type="text"
				role="searchbox"
				id="search-navbar"
				className="block w-full rounded-3xl border  bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:ring-0"
				placeholder="Szukaj..."
				onClick={(e) => e.stopPropagation()}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get("query")?.toString()}
			/>
		</div>
	);
}
