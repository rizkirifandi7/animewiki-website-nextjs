import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
	return (
		<div className="flex justify-between items-center p-4 mt-4 max-w-[1360px] mx-auto">
			<h1 className="text-2xl font-semibold text-color-primary">{title}</h1>
			{linkHref && linkTitle ? (
				<Link
					href={linkHref}
					className="md:text-sm px-2 py-1 bg-color-accent rounded-md text-sm font-semibold text-color-dark transition-all"
				>
					{linkTitle}
				</Link>
			) : null}
		</div>
	);
};

export default Header;
