import { type Route } from "next";
import Link from "next/link";

type Props = {
	href: Route;
	children: React.ReactNode;
};

export function FooterLink({ href, children }: Props) {
	return (
		<li className="mb-4">
			<Link href={href}>
				<p className="hover:underline">{children}</p>
			</Link>
		</li>
	);
}
