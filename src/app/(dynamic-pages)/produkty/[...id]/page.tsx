// import { type Metadata } from "next/types";
import { type ProductPageProps } from "@/ui/types";
import { ImageSection } from "@/ui/components/Product/ImageSection";
import { ContentSection } from "@/ui/components/Product/ContentSection";
import { ExtraSection } from "@/ui/components/Product/ExtraSection";

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
// 	// const res = await fetch(
// 	// 	"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsqaxyym000008l373lb2u18/master",
// 	// );
// 	// const data = await res.json();
// 	return {
// 		title: "Product z id: " + params.id,
// 		description: "Product description",
// 		// image: "https://splotani.pl/images/logo.png",
// 		// url: "https://splotani.pl/produkty/1",
// 		// type: "website",
// 		// siteName: "Splotani",
// 	};
// }

export default function Product({ params, searchParams }: ProductPageProps) {
	return (
		<div className="grid w-full gap-20">
			<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 xl:gap-24">
				<ImageSection params={params} searchParams={searchParams} />
				<ContentSection />
			</div>
			<ExtraSection />
		</div>
	);
}
