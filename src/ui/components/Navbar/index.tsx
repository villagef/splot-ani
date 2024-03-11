"use client";

import { useState } from "react";
import type { Route } from "next";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Links, navbarLinks } from "@/consts";
import { Icons } from "@/ui/Icons";
import { ButtonIcon } from "@/ui/atoms/ButtonIcon";
import { Logo } from "@/ui/atoms/Logo";
import { MenuMobile } from "@/ui/components/Navbar/MenuMobile";
import { LinkActive } from "@/ui/atoms/LinkActive";
import { Searchbar } from "@/ui/components/Searchbar";

export function Navbar() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<nav className="border-none bg-primary-foreground p-2 shadow-md md:px-6" aria-label="navbar">
				<div className="mx-auto grid w-full max-w-screen-xl grid-cols-5 place-items-stretch ">
					<ButtonIcon
						variant="text"
						onClick={handleOpen}
						className="col-span-2 p-0 lg:hidden"
						aria-label="Side menu button"
					>
						<Icons.hamburger className="text-primary" />
					</ButtonIcon>
					<div
						className="col-span-2 hidden items-center justify-between lg:flex lg:w-auto"
						id="navbar-search"
					>
						<ul className="flex flex-row gap-8 rounded-lg font-medium text-secondary ">
							{navbarLinks.map((link) => (
								<li key={link.name}>
									<LinkActive href={link.href as Route}>{link.name}</LinkActive>
								</li>
							))}
						</ul>
					</div>
					<div className="col-start-3 grid place-content-center">
						<Logo size={100} />
					</div>
					<div className="col-span-2 col-start-4 grid grid-flow-col place-items-center gap-6 justify-self-end pr-2 md:gap-8">
						<div className="hidden lg:block">
							<Searchbar />
						</div>
						<LinkActive href={Links.Cart as Route}>
							<ButtonIcon variant="text" aria-label="Go to favourite products button">
								<Icons.favourite />
							</ButtonIcon>
						</LinkActive>
						<LinkActive href={Links.Cart as Route}>
							<ButtonIcon variant="text" aria-label="Go to cart button">
								<Icons.shoppingCart />
							</ButtonIcon>
						</LinkActive>
						<div className="hidden lg:block">
							<SignedIn>
								<UserButton
									afterSignOutUrl="/"
									userProfileMode="navigation"
									userProfileUrl="/user-profile"
								/>
							</SignedIn>
							<SignedOut>
								<LinkActive href={Links.SignIn as Route}>
									<ButtonIcon variant="text" aria-label="Sign in button">
										<Icons.login />
									</ButtonIcon>
								</LinkActive>
							</SignedOut>
						</div>
					</div>
				</div>
			</nav>
			<MenuMobile open={open} onClose={handleClose} />
		</>
	);
}
