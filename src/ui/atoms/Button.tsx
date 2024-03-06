type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "default" | "primary" | "secondary" | "outlined" | "text";
};

export function Button({ variant = "default", className = "", children, ...rest }: Props) {
	const baseClasses =
		"rounded px-3 font-medium focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
	let buttonClasses = "";

	switch (variant) {
		case "primary":
			buttonClasses = "bg-primary text-primary-textLight hover:bg-primary/90 py-1.5";
			break;
		case "secondary":
			buttonClasses = "bg-secondary text-secondary-textLight hover:bg-secondary/90 py-1.5";
			break;
		case "outlined":
			buttonClasses =
				"border-2 border-secondary text-secondary py-1 hover:bg-secondary hover:text-secondary-textLight";
			break;
		case "text":
			buttonClasses =
				"text-primary-textDark hover:bg-secondary-background/5 hover:text-primary-textLight py-1.5";
			break;
		default:
			buttonClasses =
				"py-1 border-2 border-solid border-primary text-primary hover:bg-primary hover:text-primary-textLight";
			break;
	}

	const finalClasses = `${baseClasses} ${buttonClasses} ${className}`;

	return (
		<button className={finalClasses} {...rest}>
			{children}
		</button>
	);
}
