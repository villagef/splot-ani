import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	// Routes that can be accessed while signed out
	publicRoutes: [
		"/",
		"/koszyk",
		"/ulubione",
		"/szukaj",
		"/blog",
		"/o-nas",
		"/kontakt",
		"/koszyk/success",
		"/produkty/(.*)",
		"/produkt/(.*)",
		"/kategorie/(.*)",
		"/kolekcje/(.*)",
		"/api/stripe",
	],
	// Routes that can always be accessed, and have
	// no authentication information
	ignoredRoutes: [],
});

export const config = {
	// Protects all routes, including api/trpc.
	// See https://clerk.com/docs/references/nextjs/auth-middleware
	// for more information about configuring your Middleware
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
