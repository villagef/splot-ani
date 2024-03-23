"use client";

import { type Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SortOptions } from "@/consts";

export function ProductsSort() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const params = new URLSearchParams(searchParams.toString());
		const selectedValue = event.target.value as SortOptions;

		selectedValue === SortOptions.updatedAt_DESC
			? params.delete("sort")
			: params.set("sort", event.target.value);

		const url = `${pathname}?${params.toString()}` as Route;
		router.push(url);
	};

	return (
		<div className="flex w-full justify-end pt-4">
			<form className="w-full sm:w-64">
				<select
					value={searchParams.get("sort") || SortOptions.updatedAt_DESC}
					onChange={selectHandler}
					className="block w-full rounded-lg border border-secondary bg-secondary-foreground p-2.5 text-sm text-primary-textDark focus:border-primary focus:ring-primary"
				>
					{Object.entries(SortOptions).map(([key, value]) => (
						<option key={key} value={value} data-testid="sort-by-price">
							{value}
						</option>
					))}
				</select>
			</form>
		</div>
	);
}
