import { type Metadata } from "next/types";
import { Typography } from "@/ui/atoms/Typography";

type Props = {
	params: {
		id: string;
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// const res = await fetch(
	// 	"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsqaxyym000008l373lb2u18/master",
	// );
	// const data = await res.json();
	return {
		title: "Product z id: " + params.id,
		description: "Product description",
		// image: "https://splotani.pl/images/logo.png",
		// url: "https://splotani.pl/produkty/1",
		// type: "website",
		// siteName: "Splotani",
	};
}

export default function Product({ params }: Props) {
	return (
		<Typography variant="h2" className="text-center">
			Produkt {params.id}
		</Typography>
	);
}
