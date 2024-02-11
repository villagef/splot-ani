"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	link: {
		name: string;
		href: string;
	};
};

export function NavbarLink({ link: { name, href } }: Props) {
	const pathname = usePathname();
	return (
		<li>
			<Link
				href={href}
				className={`hover:text-primary tracking-wider ${pathname === href && "text-primary font-bold"}`}
			>
				{name}
			</Link>
		</li>
	);
}
