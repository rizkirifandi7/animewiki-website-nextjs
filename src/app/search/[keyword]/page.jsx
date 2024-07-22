import AnimeList from "@/components/AnimeList/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/lib/api-libs";

const Page = async ({ params }) => {
	const { keyword } = params;
	const decodedKeyword = decodeURI(keyword);
	const searchAnime = await getAnimeResponse(
		"anime",
		`q=${decodedKeyword}`
	);

	return (
		<section>
			<Header title={`Hasil Pencarian: ${decodedKeyword}`} />
			<AnimeList api={searchAnime} />
		</section>
	);
};

export default Page;
