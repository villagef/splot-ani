"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Typography } from "@/ui/atoms/Typography";

type Props<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
};

export function LinkActive<T extends string>({ href, children }: Props<T>) {
	const pathname = usePathname();
	const highlight =
		pathname === href ||
		(href !== "/" && pathname.includes(href as string)) ||
		(pathname.includes("produkt") && href.includes("produkt"))
			? true
			: false;

	return (
		<Link
			href={href}
			className={`tracking-widest hover:text-primary ${highlight && "font-bold text-primary"}`}
			aria-current={highlight ? true : undefined}
		>
			<Typography variant="body1" className="text-nowrap">
				{children}
			</Typography>
		</Link>
	);
}
