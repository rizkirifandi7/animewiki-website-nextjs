import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimeResponse } from "@/lib/api-libs";
import Image from "next/image";
import React from "react";

const Page = async ({ params: { id } }) => {
	const animeDetail = await getAnimeResponse(`anime/${id}`);

	return (
		<div className="flex flex-col sm:max-w-[1024px] md:max-w-[1280px] md:mx-auto">
			<div className="mt-10 px-4 flex justify-center items-center">
				<VideoPlayer youtubeId={animeDetail.data.trailer.youtube_id} />
			</div>

			<div className="px-4 pt-6">
				<h3 className="text-color-primary md:text-3xl text-2xl text-center md:text-left font-bold">
					{animeDetail.data.title} ({animeDetail.data.year})
				</h3>
			</div>

			<div className="p-4 flex md:justify-start md:items-start justify-center items-center flex-wrap gap-2 text-color-primary overflow-x-auto">
				{animeDetail.data.genres.map((genre) => (
					<div
						key={genre.mal_id}
						className="rounded-md border border-color-primary p-2"
					>
						<p>{genre.name}</p>
					</div>
				))}
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 gap-6 text-color-primary">
				<Image
					src={animeDetail.data.images.webp.image_url}
					alt={animeDetail.data.images.jpg.image_url}
					width={280}
					height={280}
					className="md:w-[280px] md:h-[280px] rounded object-cover"
				/>
				<p className="text-justify text-base md:pl-4 px-4 md:px-0">
					{animeDetail.data.synopsis}
				</p>
			</div>
		</div>
	);
};

export default Page;
