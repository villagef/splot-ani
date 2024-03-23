import { type Route } from "next";
import { Button } from "@/ui/atoms/Button";
import { LinkActive } from "@/ui/atoms/LinkActive";
import { PRODUCTS_PER_PAGE, type SortOptions } from "@/consts";

type Props = {
	total: number;
	itemsPerPage: number;
	currentPage: number;
	path: string;
	sort?: SortOptions;
};

export function Pagination({ total, itemsPerPage, currentPage, path, sort }: Props) {
	const totalPages = Math.ceil(total / itemsPerPage);
	const renderPages = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			const isActive = currentPage === i;
			const href = sort ? `${path}${i}?sort=${sort}` : `${path}${i}`;
			pages.push(
				<li key={i}>
					<LinkActive href={href as Route}>
						<Button
							className={`h-10 border px-4 leading-tight ${isActive && "bg-primary text-primary-textLight"}`}
							disabled={isActive}
						>
							{i}
						</Button>
					</LinkActive>
				</li>,
			);
		}
		return pages;
	};

	if (total <= PRODUCTS_PER_PAGE) {
		return null;
	}

	return (
		<ul
			className="flex h-10 items-center justify-center gap-2 -space-x-px pb-4 text-base md:pb-0"
			aria-label="pagination"
		>
			{renderPages()}
		</ul>
	);
}
