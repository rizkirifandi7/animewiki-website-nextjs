import Link from "next/link";
import { LuFileSearch2 } from "react-icons/lu";

const Page = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen gap-5">
			<LuFileSearch2 className="text-8xl text-color-accent" />
			<h1 className="font-bold text-color-accent text-3xl">NOT FOUND</h1>
			<Link
				href="/"
				className="text-color-primary hover:text-color-accent transition-all underline"
			>
				Kembali
			</Link>
		</div>
	);
};

export default Page;
