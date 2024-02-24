import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";

type Props = {
	name: string;
	href: Route;
	icon: string;
};

export function LinkSocial({ href, name, icon }: Props) {
	return (
		<Link key={name} href={href} aria-label={`Follow us on ${name}`} target="_blank">
			<Image width={32} height={32} src={icon} alt={name} />
		</Link>
	);
}
