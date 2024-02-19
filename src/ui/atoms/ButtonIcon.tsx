type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "outlined" | "text";
};

export function ButtonIcon({ children, variant = "primary", className = "", ...rest }: Props) {
	const baseClasses = "rounded-full p-2 focus:outline-none";

	let buttonClasses = "";
	let iconClasses = "";

	switch (variant) {
		case "primary":
			buttonClasses = "bg-primary text-primary-textLight hover:bg-primary/90";
			iconClasses = "text-primary-textLight";
			break;
		case "secondary":
			buttonClasses = "bg-secondary text-secondary-textLight hover:bg-secondary/90";
			iconClasses = "text-secondary-textLight ";
			break;
		case "outlined":
			buttonClasses =
				"border border-secondary text-secondary hover:bg-secondary hover:text-secondary-textLight";
			iconClasses = "text-secondary hover:text-secondary-textLight";
			break;
		case "text":
			buttonClasses =
				"hover:bg-secondary-background/5 hover:text-primary-textLight hover:scale-105";
			iconClasses = "text-primary-textDark";
			break;
		default:
			buttonClasses =
				"border border-primary text-primary hover:bg-primary hover:text-primary-textLight";
			iconClasses = "text-primary hover:text-primary-textLight";
			break;
	}

	const finalButtonClasses = `${className} ${baseClasses} ${buttonClasses}`;

	return (
		<button className={finalButtonClasses} {...rest}>
			<span className={`block ${iconClasses}`}>{children}</span>
		</button>
	);
}
