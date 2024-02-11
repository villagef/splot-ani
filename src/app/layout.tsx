import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/ui/components/Footer";
import { Navbar } from "@/ui/components/Navbar";

const fonts = Montserrat({
	weight: ["300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Splotani",
	description: "Splotani - sklep z rękodziełem",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={fonts.className}>
				<Navbar />
				<main className="flex min-h-screen w-full flex-auto flex-col items-center">
					<div className="container max-w-screen-xl items-center p-8">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
