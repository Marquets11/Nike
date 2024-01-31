import FormContact from "../components/FormContact";

export default function ContactPage() {
	return (
		<main className="flex-1 bg-gray-600 overflow-auto sm:flex justify-center">
			<div className="flex flex-col justify-center items-center gap-1 rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md bg-black max-sm:py-5 sm:w-2/3 my-14">
				<h1 className="text-green-600 text-4xl lg:text-5xl font-extrabold">
					Contact us
				</h1>

				<FormContact />
			</div>
		</main>
	);
}
