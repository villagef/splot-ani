import { Logo } from "@/ui/atoms/Logo";
import { FooterLink } from "@/ui/components/Footer/FooterLink";
import { footerLinksGroupOne, footerLinksGroupTwo, socialLinks } from "@/consts";
import { LinkSocial } from "@/ui/atoms/LinkSocial";
import { Separator } from "@/ui/atoms/Separator";

export function Footer() {
	return (
		<footer className="bg-primary-background text-secondary shadow-inner sm:tracking-wider">
			<div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<div className="flex items-center">
							<Logo size={120} />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-20">
						<div>
							<h2 className="text-md mb-6 font-semibold uppercase ">Splotani.pl</h2>
							<ul className="font-normal ">
								{footerLinksGroupOne.map((link) => (
									<FooterLink key={link.name} link={link} />
								))}
							</ul>
						</div>
						<div>
							<h2 className="text-md mb-6 font-semibold uppercase ">Pomoc</h2>
							<ul>
								{footerLinksGroupTwo.map((link) => (
									<FooterLink key={link.name} link={link} />
								))}
							</ul>
						</div>
					</div>
				</div>
				<Separator fullWidth />
				<div className="flex items-center justify-between gap-4">
					<span className="text-sm ">© 2024 Splotani™. All Rights Reserved.</span>
					<div className="flex justify-end gap-6 py-2 sm:justify-center ">
						{socialLinks.map((link) => (
							<LinkSocial key={link.name} link={link} />
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
