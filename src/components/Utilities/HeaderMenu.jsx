import React from "react";

const HeaderMenu = ({ title }) => {
	return (
		<div>
			<div className="relative p-8">
				<h3 className="text-center text-2xl text-color-primary font-bold bg-color-dark">
					{title}
				</h3>
				<div className="absolute top-2/4 bg-color-accent h-[2px] w-full"></div>
			</div>
		</div>
	);
};

export default HeaderMenu;
