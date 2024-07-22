import Header from "@/components/AnimeList/Header";
import AnimeList from "../components/AnimeList/AnimeList";
import { getAnimeResponse } from "@/lib/api-libs";

const Page = async () => {
	const topAnime = await getAnimeResponse("top/anime", "limit=12");

	return (
		<>
			<section>
				<Header
					title="Anime Populer"
					linkHref="/populer"
					linkTitle="View All"
				/>
				<AnimeList api={topAnime} />
			</section>

			<section>
				<Header
					title="Anime Populer"
					linkHref="/populer"
					linkTitle="View All"
				/>
				<AnimeList api={topAnime} />
			</section>
		</>
	);
};

export default Page;

