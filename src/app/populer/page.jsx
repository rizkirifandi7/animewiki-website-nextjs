"use client";

import { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList/AnimeList";
import { getAnimeResponse } from "@/lib/api-libs";

const Page = async () => {
	const [page, setPage] = useState(1);
	const [topAnime, setTopAnime] = useState([]);

	const fetchData = async () => {
		const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
		setTopAnime(populerAnime);
	};

	useEffect(() => {
		fetchData();
	}, [page]);

	return (
		<div>
			<HeaderMenu title={`ANIME TERPOPULER #${page}`} />
			<AnimeList api={topAnime} />
			<Pagination
				page={page}
				setPage={setPage}
				lastPage={topAnime.pagination?.last_visible_page}
			/>
		</div>
	);
};

export default Page;
