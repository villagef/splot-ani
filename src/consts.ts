export enum Links {
	Home = "/",
	About = "/about",
	Contact = "/contact",
	Blog = "/blog",
	Returns = "/returns",
	Payments = "/payments",
	Terms = "/terms",
	Privacy = "/privacy",
	Facebook = "https://www.facebook.com/",
	Instagram = "https://www.instagram.com/",
}

export const navbarLinks = [
	{ name: "Sklep", href: Links.Home },
	{ name: "Blog", href: Links.Blog },
	{ name: "O nas", href: Links.About },
] as const;

export const footerLinksGroupOne = [
	{ name: "O nas", href: Links.About },
	{ name: "Kontakt", href: Links.Contact },
	{ name: "Blog", href: Links.Blog },
] as const;

export const footerLinksGroupTwo = [
	{ name: "Zwroty", href: Links.Returns },
	{ name: "Płatności", href: Links.Payments },
	{ name: "Regulamin sklepu", href: Links.Terms },
	{ name: "Polityka prywatności", href: Links.Privacy },
] as const;

export const socialLinks = [
	{ name: "Facebook", href: Links.Facebook, icon: "/facebook.svg" },
	{ name: "Instagram", href: Links.Instagram, icon: "/instagram.svg" },
] as const;
