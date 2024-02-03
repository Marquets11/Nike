import FormLogin from "../components/FormLogin";

export default function LoginPage() {
	return (
		<main className="flex-1 bg-gray-600 overflow-auto h-full">
			<div className="bg-black py-2 px-5">
				<FormLogin />
			</div>
		</main>
	);
}
