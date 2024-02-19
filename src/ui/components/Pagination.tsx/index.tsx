"use client";

import { useState } from "react";
import { PRODUCTS_PER_PAGE } from "@/consts";
import { Icons } from "@/ui/Icons";
import { Button } from "@/ui/atoms/Button";
import products from "@/data.json";

export function Pagination() {
	const [currentPage, setCurrentPage] = useState(1);
	const productsLenght = products.data.length;

	const totalPages = Math.ceil(productsLenght / PRODUCTS_PER_PAGE) || 1;

	const onPageChange = (page: number) => {
		console.log(page);
		setCurrentPage(page);
	};

	const renderPages = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			const isActive = currentPage === i;
			pages.push(
				<li key={i}>
					<Button
						onClick={() => onPageChange(i)}
						className={`h-10 border px-4 leading-tight border-${isActive ? "blue-300" : "gray-300"}`}
					>
						{i}
					</Button>
				</li>,
			);
		}
		return pages;
	};

	return (
		<ul className="flex h-10 items-center justify-center gap-2 -space-x-px pb-4 text-base md:pb-0">
			<li>
				<Button
					onClick={() => onPageChange(currentPage - 1)}
					className="ms-0 h-10 rounded-l-lg border  px-4 leading-tight"
					disabled={currentPage === 1}
				>
					<Icons.chevronLeft />
				</Button>
			</li>
			{renderPages()}
			<li>
				<Button
					onClick={() => onPageChange(currentPage + 1)}
					className="h-10 rounded-r-lg border px-4 leading-tight"
					disabled={currentPage === totalPages}
				>
					<Icons.chevronRight />
				</Button>
			</li>
		</ul>
	);
}
