import Link from "next/link";
import { PRODUCTS_PER_PAGE } from "@/consts";
import { Icons } from "@/ui/Icons";
import { Button } from "@/ui/atoms/Button";

type Props = {
	total: number;
	currentPage: number;
	path: string;
};

export function Pagination({ total, currentPage, path }: Props) {
	const totalPages = Math.ceil(total / PRODUCTS_PER_PAGE);
	const renderPages = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			const isActive = currentPage === i;
			pages.push(
				<li key={i}>
					<Link href={`${path}${i}`}>
						<Button
							className={`h-10 border px-4 leading-tight ${isActive && "bg-primary text-primary-textLight"}`}
							disabled={isActive}
						>
							{i}
						</Button>
					</Link>
				</li>,
			);
		}
		return pages;
	};

	return (
		<ul className="flex h-10 items-center justify-center gap-2 -space-x-px pb-4 text-base md:pb-0">
			<li>
				<Link href={`${path}${currentPage - 1}`}>
					<Button
						className="ms-0 h-10 rounded-l-lg border  px-4 leading-tight"
						disabled={currentPage === 1}
					>
						<Icons.chevronLeft />
					</Button>
				</Link>
			</li>
			{renderPages()}
			<li>
				<Link href={`${path}${currentPage + 1}`}>
					<Button
						className="h-10 rounded-r-lg border px-4 leading-tight"
						disabled={currentPage === totalPages}
					>
						<Icons.chevronRight />
					</Button>
				</Link>
			</li>
		</ul>
	);
}
