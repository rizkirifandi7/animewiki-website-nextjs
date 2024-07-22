"use client";
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";

const VideoPlayer = ({ youtubeId }) => {
	const isMediumScreen = useMediaQuery({ query: "(min-width: 1280px)" });
	const isTabScreen = useMediaQuery({
		query: "(min-width: 768px)",
	});

	let option;
	if (isMediumScreen) {
		option = {
			width: "1250px",
			height: "720px",
		};
	} else if (isTabScreen) {
		option = {
			width: "780px",
			height: "480px",
		};
	} else {
		option = {
			width: "340px",
			height: "300px",
		};
	}

	return (
		<YouTube
			opts={option}
			videoId={youtubeId}
			onReady={(event) => event.target.pauseVideo()}
		/>
	);
};

export default VideoPlayer;
