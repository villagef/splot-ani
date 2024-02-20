"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	link: {
		name: string;
		href: Route;
	};
	className?: string;
};

export function LinkActive({ link: { href, name } }: Props) {
	const pathname = usePathname();
	const highlight = pathname === href || (href !== "/" && pathname.includes(href)) ? true : false;

	return (
		<Link
			href={href}
			className={`tracking-widest hover:text-primary ${highlight && "font-bold text-primary"}`}
		>
			{name}
		</Link>
	);
}