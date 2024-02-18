import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/ui/components/Footer";
import { Navbar } from "@/ui/components/Navbar";

const fonts = Montserrat({
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
				<main className="flex min-h-screen w-full flex-auto flex-col items-center text-primary-textDark">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
