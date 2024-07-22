import React from "react";
import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
	return (
		<div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-6 px-4 md:max-w-[1360px] md:mx-auto">
			{api.data?.map((anime) => {
				return (
					<Link
						key={anime.mal_id}
						href={`/anime/${anime.mal_id}`}
						className="cursor-pointer text-color-primary hover:text-color-accent transition-all mb-4"
					>
						<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat rounded-md group ">
							<Image
								src={anime.images.webp.image_url}
								alt="..."
								width={250}
								height={320}
								className="w-full h-[270px] object-cover rounded-md transition duration-300 ease-in-out hover:scale-110 hover:opacity-50"
							/>
							<div className="absolute bottom-0 right-0 bg-color-accent text-color-dark p-2 rounded-tl-md rounded-br-md opacity-0 group-hover:opacity-100 transition-opacity">
								<p className="text-sm font-semibold">{anime.score}</p>
							</div>
						</div>
						<div className="flex flex-col gap-1 pt-3">
							<h3 className="font-semibold md:text-base text-sm truncate">
								{anime.title}
							</h3>
							<p className="text-sm">{anime.year}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default AnimeList;
