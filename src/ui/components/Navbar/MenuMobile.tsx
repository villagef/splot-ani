import { type Route } from "next";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Drawer } from "@/ui/atoms/Drawer";
import { Links, mobileNavbarLinksGroupOne, mobileNavbarLinksGroupTwo, socialLinks } from "@/consts";
import { LinkActive } from "@/ui/atoms/LinkActive";
import { Separator } from "@/ui/atoms/Separator";
import { LinkSocial } from "@/ui/atoms/LinkSocial";
import { Searchbar } from "@/ui/components/Searchbar";
import { Button } from "@/ui/atoms/Button";

type Props = {
	open: boolean;
	onClose: () => void;
};

export function MenuMobile({ open, onClose }: Props) {
	return (
		<Drawer open={open} onClose={onClose}>
			<div className="flex flex-col items-center gap-4">
				<div className="flex flex-col items-center gap-4 lg:hidden">
					<SignedIn>
						<UserButton afterSignOutUrl="/" />
					</SignedIn>
					<Searchbar />
				</div>
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
				<SignedOut>
					<LinkActive href={Links.SignIn}>
						<Button>Zaloguj się</Button>
					</LinkActive>
				</SignedOut>
				<Separator />
				<div className="flex gap-4">
					{socialLinks.map((link) => (
						<LinkSocial
							key={link.name}
							href={link.href as Route}
							name={link.name}
							icon={link.icon}
						/>
					))}
				</div>
			</div>
		</Drawer>
	);
}
