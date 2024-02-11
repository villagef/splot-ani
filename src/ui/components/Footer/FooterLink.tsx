import Link from "next/link";

type Props = {
	link: {
		name: string;
		href: string;
	};
};

export function FooterLink({ link: { name, href } }: Props) {
	return (
		<li className="mb-4">
			<Link href={href}>
				<p className="hover:underline">{name}</p>
			</Link>
		</li>
	);
}
