export enum Links {
	Home = "/",
	About = "/o-nas",
	Contact = "/kontakt",
	Cart = "/koszyk",
	Blog = "/blog",
	Product = "/produkt",
	Products = "/produkty",
	Collections = "/collections",
	Search = "/search",
	Returns = "/zwroty",
	Orders = "/zamowienia",
	Payments = "/platnosci",
	Terms = "/regulamin",
	Privacy = "/polityka-prywatnosci",
	SignIn = "/sign-in",
	SignUp = "/sign-up",
	SignOut = "/sign-out",
	Facebook = "https://www.facebook.com/",
	Instagram = "https://www.instagram.com/splotani/",
}

export enum ProductCategory {
	All = "wszystkie",
	Bags = "torebki",
	FlowerBeds = "kwietniki",
	Baskets = "koszyki",
}

export enum Cookies {
	CartId = "splotani_cartId",
	ProductAddedToCartToast = "splotani_productAddedToCartToast",
	ProductRemovedFromCartToast = "splotani_productRemovedFromCartToast",
	ReviewAddedToast = "splotani_reviewAddedToast",
}

export enum GraphqlTags {
	GetCartById = "getCartById",
	GetAllOrders = "getAllOrders",
}

export enum SortOptions {
	updatedAt_DESC = "Sortowanie domyślne",
	price_ASC = "Cena rosnąco",
	price_DESC = "Cena malejąco",
}

export const CookieConfig = {
	maxAge: 60 * 60 * 24,
	expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
} as const;

export const PRODUCTS_PER_PAGE = 4 as const;

export const navbarLinks = [
	{ name: "Strona Główna", href: Links.Home },
	{ name: "Produkty", href: Links.Products },
	{ name: "Zamówienia", href: Links.Orders },
] as const;

export const mobileNavbarLinksGroupOne = [
	{ name: "Strona Główna", href: Links.Home },
	{ name: "Produkty", href: Links.Products },
	{ name: "Zamówienia", href: Links.Orders },
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
