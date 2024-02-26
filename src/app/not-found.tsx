import Link from "next/link";
import { Button } from "@/ui/atoms/Button";
import { Typography } from "@/ui/atoms/Typography";

export default function NotFound() {
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center text-pretty bg-primary-foreground text-center">
			<Typography variant="h1" className="pb-12">
				404 | Page Not Found
			</Typography>
			<Link href="/" className="pb-28">
				<Button variant="default" color="primary">
					Wróć do strony głównej
				</Button>
			</Link>
		</div>
	);
}
