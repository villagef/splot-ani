"use client";

import { useState } from "react";
import { navbarLinks } from "@/consts";
import { Icons } from "@/ui/Icons";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { Logo } from "@/ui/atoms/Logo";
import { SearchBar } from "@/ui/atoms/SearchBar";
import { MenuMobile } from "@/ui/components/Navbar/MenuMobile";
import { LinkActive } from "@/ui/atoms/LinkActive";

export function Navbar() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<nav className="border-none bg-secondary px-2">
				<div className="mx-auto flex w-full max-w-screen-xl items-center justify-between p-2">
					<Logo />
					<div className="flex items-center gap-4 md:order-2">
						<SearchBar />
						<ButtonIcon variant="text" onClick={handleOpen} className="md:hidden">
							<Icons.hamburger className="text-primary" />
						</ButtonIcon>
					</div>
					<div
						className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
						id="navbar-search"
					>
						<ul className="flex flex-row gap-8 rounded-lg p-4 font-medium text-secondary-textLight ">
							{navbarLinks.map((link) => (
								<LinkActive key={link.name} link={link} />
							))}
						</ul>
					</div>
				</div>
			</nav>
			<MenuMobile open={open} onClose={handleClose} />
		</>
	);
}
