export enum Links {
	Home = "/",
	About = "/o-nas",
	Contact = "/kontakt",
	Blog = "/blog",
	Products = "/produkty",
	Returns = "/zwroty",
	Payments = "/platnosci",
	Terms = "/regulamin",
	Privacy = "/polityka-prywatnosci",
	Facebook = "https://www.facebook.com/",
	Instagram = "https://www.instagram.com/",
}

export enum ProductCategory {
	All = "Wszystkie",
	Bags = "Torebki",
	FlowerBeds = "Kwietniki",
	Baskets = "Koszyki",
}

export const PRODUCTS_PER_PAGE = 3 as const;

export const navbarLinks = [
	{ name: "Strona Główna", href: Links.Home },
	{ name: "Produkty", href: Links.Products },
	{ name: "O nas", href: Links.About },
] as const;

export const mobileNavbarLinksGroupOne = [
	{ name: "Strona Główna", href: Links.Home },
	{ name: "Produkty", href: Links.Products },
	{ name: "O nas", href: Links.About },
] as const;

export const mobileNavbarLinksGroupTwo = [
	{ name: "Płatności", href: Links.Payments },
	{ name: "Zwroty", href: Links.Returns },
	{ name: "Regulamin sklepu", href: Links.Terms },
	{ name: "Polityka prywatności", href: Links.Privacy },
	{ name: "Kontakt", href: Links.Contact },
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
