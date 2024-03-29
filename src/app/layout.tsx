import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "sonner";
import { Footer } from "@/ui/components/Footer";
import { Navbar } from "@/ui/components/Navbar";

const fonts = Montserrat({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Splotani",
	description: "Splotani - sklep z rękodziełem z makramy",
	applicationName: "Splotani",
	// TODO - change to real URL
	metadataBase: new URL(process.env.HYGRAPH_URL as string),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="pl">
				<body className={fonts.className}>
					<Suspense fallback={<>Ładowanie strony...</>}>
						<Navbar />
						<main className="flex min-h-screen w-full flex-auto flex-col items-center text-primary-textDark">
							{children}
						</main>
						<Footer />
					</Suspense>
					<Toaster position="bottom-right" richColors />
				</body>
			</html>
		</ClerkProvider>
	);
}
