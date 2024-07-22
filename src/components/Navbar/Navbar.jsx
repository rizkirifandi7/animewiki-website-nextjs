import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
	return (
		<header>
			<div className="bg-color-accent">
				<div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2 md:max-w-[1360px] md:mx-auto">
					<Link href="/" className="font-bold text-3xl text-color-dark">
						ANIMEWIKI
					</Link>
					<InputSearch />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
