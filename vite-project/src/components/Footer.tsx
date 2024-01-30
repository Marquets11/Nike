import {
	TfiPinterestAlt,
	TfiLinkedin,
	TfiTwitterAlt,
	TfiFacebook,
} from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="flex justify-center items-center gap-5 bg-black py-3 px-12 h-40 text-white text-2xl">
			<a href="https:///www.youtube.com" target="blank">
				<FaYoutube />
			</a>
			<a href="https:///www.pinterest.com" target="blank">
				<TfiPinterestAlt />
			</a>
			<a href="https:///www.linkedin.com" target="blank">
				<TfiLinkedin />
			</a>
			<a href="https:///www.x.com" target="blank">
				<TfiTwitterAlt />
			</a>
			<a href="https:///www.facebook.com" target="blank">
				<TfiFacebook />
			</a>
		</div>
	);
}
