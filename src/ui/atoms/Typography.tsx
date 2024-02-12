type TypographyProps = {
	variant?:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "subtitle1"
		| "subtitle2"
		| "body1"
		| "body2"
		| "caption"
		| "button"
		| "overline";
	className?: string;
	children: React.ReactNode;
};

export function Typography({ variant = "body1", className = "", children }: TypographyProps) {
	const getFontSize = (variant: string) => {
		switch (variant) {
			case "h1":
				return "text-4xl font-bold";
			case "h2":
				return "text-3xl font-bold";
			case "h3":
				return "text-2xl font-bold";
			case "h4":
				return "text-xl font-bold";
			case "h5":
				return "text-lg font-bold";
			case "h6":
				return "text-base font-bold";
			case "subtitle1":
				return "text-lg";
			case "subtitle2":
				return "text-base";
			case "body1":
				return "text-base";
			case "body2":
				return "text-sm";
			case "caption":
				return "text-xs";
			case "button":
				return "text-sm font-semibold uppercase";
			case "overline":
				return "text-xs uppercase";
			default:
				return "";
		}
	};

	const classes = `typography text-primary-textDark ${getFontSize(variant)} ${className}`;

	return <p className={classes}>{children}</p>;
}
