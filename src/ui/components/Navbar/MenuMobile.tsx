import { Drawer } from "@/ui/atoms/Drawer";
import { mobileNavbarLinksGroupOne, mobileNavbarLinksGroupTwo, socialLinks } from "@/consts";
import { LinkActive } from "@/ui/atoms/LinkActive";
import { Separator } from "@/ui/atoms/Separator";
import { LinkSocial } from "@/ui/atoms/LinkSocial";

type Props = {
	open: boolean;
	onClose: () => void;
};

export function MenuMobile({ open, onClose }: Props) {
	return (
		<Drawer open={open} onClose={onClose}>
			<div className="flex flex-col items-center gap-4">
				{mobileNavbarLinksGroupOne.map((link) => (
					<LinkActive key={link.href} href={link.href}>
						{link.name}
					</LinkActive>
				))}
				<Separator />
				{mobileNavbarLinksGroupTwo.map((link) => (
					<LinkActive key={link.href} href={link.href}>
						{link.name}
					</LinkActive>
				))}
				<Separator />
				<div className="flex gap-4">
					{socialLinks.map((link) => (
						<LinkSocial key={link.name} link={link} />
					))}
				</div>
			</div>
		</Drawer>
	);
}
