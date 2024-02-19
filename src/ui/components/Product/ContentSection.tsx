import Link from "next/link";
import { Typography } from "@/ui/atoms/Typography";
import { Icons } from "@/ui/Icons";
import { Wrapper } from "@/ui/components/Product/Wrapper";
import { ActionButtons } from "@/ui/components/Product/ActionButtons";
import { Links } from "@/consts";

export function ContentSection() {
	return (
		<div className="grid place-content-center">
			<div className="grid place-content-center gap-8 rounded-xl bg-primary-foreground p-4 tracking-wide shadow-md md:gap-10 md:p-8">
				<Link href={Links.Products} className="hidden gap-4 text-primary-textDark/70 md:flex">
					<Icons.arrowLeft />
					<Typography variant="subtitle2" className="font-semibold ">
						Powrót do poprzedniej strony
					</Typography>
				</Link>
				<div>
					<Typography variant="subtitle2" className="font-semibold text-primary-textDark/40">
						Makramy
					</Typography>
					<Typography variant="h2" className="text-pretty text-primary">
						Makrama wisząca
					</Typography>
				</div>
				<Typography variant="body1" className="leading-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, nunc nec lacinia
					lacinia, nunc nunc lacinia lacinia, nunc nec lacinia lacinia, nunc nec lacinia
				</Typography>
				<div>
					<Wrapper>
						<Typography variant="h3">200,00 zł</Typography>
						<div className="right-0 top-0 z-10 h-fit rounded-md bg-secondary px-2 py-0.5 text-sm lowercase text-primary-textLight">
							50%
						</div>
					</Wrapper>
					<Typography variant="h5" className="text-primary-textDark/50 line-through">
						400,00 zł
					</Typography>
					<Typography variant="body2" className="text-pretty pt-2 text-primary-textDark/70">
						Najniższa cena z 30 dni przed obniżką: 400,00 zł
					</Typography>
				</div>
				<Wrapper>
					<Typography variant="body1" className="text-pretty text-primary-textDark/70">
						Dostępność: <span className="font-bold text-primary">5 szt.</span>
					</Typography>
				</Wrapper>
				<ActionButtons />
			</div>
		</div>
	);
}
