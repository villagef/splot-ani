import Link from "next/link";
import Image from "next/image";

type Props = {
	link: {
		name: string;
		href: string;
		icon: string;
	};
};

export function LinkSocial({ link }: Props) {
	return (
		<Link key={link.name} href={link.href} aria-label={`Follow us on ${link.name}`} target="_blank">
			<Image width={32} height={32} src={link.icon} alt={link.name} />
		</Link>
	);
}
