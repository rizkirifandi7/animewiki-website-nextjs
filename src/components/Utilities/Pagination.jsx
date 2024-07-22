import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
	const scrollToTop = () => {
		scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleNextPage = () => {
		if (page >= lastPage) return;
		setPage((prev) => prev + 1);
		scrollToTop();
	};

	const handlePrevPage = () => {
		if (page <= 1) return;
		setPage((prev) => prev - 1);
		scrollToTop();
	};

	return (
		<div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary">
			{page <= 1 ? null : (
				<button
					className="transition-all hover:text-color-accent"
					onClick={handlePrevPage}
				>
					Prev
				</button>
			)}
			<p>
				{page} of {lastPage}
			</p>
			{page >= lastPage ? null : (
				<button
					className="transition-all hover:text-color-accent"
					onClick={handleNextPage}
				>
					Next
				</button>
			)}
		</div>
	);
};

export default Pagination;
