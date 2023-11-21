const Button = ({ children, classes }: { children: any; classes?: string }) => {
	const btnClasses =
		"p-2 rounded-lg bg-brand-lightBackground text-white" + classes;
	return <button className={btnClasses}>{children}</button>;
};

export default Button;

// className: 'p4 bg-brand-heading text-white
