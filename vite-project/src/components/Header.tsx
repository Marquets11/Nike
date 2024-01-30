import { FaRegUserCircle } from "react-icons/fa";
import { TfiHelpAlt, TfiComments } from "react-icons/tfi";
import { Link } from "react-router-dom";
import IMAGES from "../images/images";

export default function Header() {
	return (
		<div className="flex justify-between items-center py-2 px-14 gap-y-1 gap-x-4 bg-green-600 hover:drop-shadow-xl hover:shadow-xl duration-700 max-sm:flex-col">
			<Link to="/">
				<img src={IMAGES.nikeLogo} alt="logo da Nike" className="w-20" />
			</Link>
			<nav className="flex gap-4 max-sm:w-full max-sm:justify-between">
				<Link
					to={"about"}
					className="text-gray-600 hover:text-black duration-200"
				>
					<TfiHelpAlt size={"2rem"} title="About us icon" />
				</Link>
				<Link
					to={"contact"}
					className="text-gray-600 hover:text-black duration-200"
				>
					<TfiComments size={"2rem"} title="Contact icon" />
				</Link>
				<Link
					to={"login"}
					className="text-gray-600 hover:text-black duration-200"
				>
					<FaRegUserCircle size={"2rem"} title="Login icon" />
				</Link>
			</nav>
		</div>
	);
}
