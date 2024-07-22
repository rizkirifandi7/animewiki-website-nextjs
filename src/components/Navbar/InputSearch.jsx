"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

const InputSearch = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearch = (event) => {
		const keyword = searchRef.current.value;

		if (!keyword) return;

		if (event.key === "Enter" || event.type === "click") {
			event.preventDefault();
			router.push(`/search/${keyword}`);
		}
	};

	return (
		<div className="relative">
			<input
				ref={searchRef}
				placeholder="Search..."
				className="w-full p-2 rounded"
				onKeyDown={handleSearch}
			/>
			<button className="absolute top-2 end-2" onClick={handleSearch}>
				<IoSearchOutline className="text-2xl" />
			</button>
		</div>
	);
};

export default InputSearch;
