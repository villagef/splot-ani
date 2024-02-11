import { navbarLinks } from "@/consts";
import { Logo } from "@/ui/atoms/Logo";
import { SearchBar } from "@/ui/atoms/SearchBar";
import { Hamburger } from "@/ui/components/Navbar/Hamburger";
import { NavbarLink } from "@/ui/components/Navbar/NavbarLink";

export function Navbar() {
	return (
		<nav className="bg-secondary border-none px-2">
			<div className="mx-auto flex w-full max-w-screen-xl items-center justify-between p-2">
				<Logo />
				<div className="flex items-center gap-4 md:order-2">
					<SearchBar />
					<Hamburger />
				</div>
				<div
					className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
					id="navbar-search"
				>
					<ul className="text-secondary-textLight flex flex-row gap-8 rounded-lg p-4 font-medium ">
						{navbarLinks.map((link) => (
							<NavbarLink key={link.name} link={link} />
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
