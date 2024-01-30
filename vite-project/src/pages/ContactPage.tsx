import FormContact from "../components/FormContact";

export default function ContactPage() {
	return (
		<main className="flex-1 bg-gray-600 overflow-auto sm:flex justify-center">
			<div className="flex flex-col justify-center items-center gap-5 rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md py-10 bg-black sm:w-2/3 my-14">
				<h1 className="text-green-600 text-4xl sm:text-6xl font-extrabold">
					Contact us
				</h1>

				<FormContact />
			</div>
		</main>
	);
}
