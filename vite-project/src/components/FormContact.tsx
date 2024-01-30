export default function FormContact() {
	return (
		<form className="flex flex-col gap-5 w-full p-10">
			{/* Name */}
			<div className="flex rounded-lg">
				<span className="formContactLabel">Name</span>
				<input
					type="text"
					aria-label="name"
					placeholder="Ex: Marcus Vinícius Martins Marco"
					className="formContactInput"
				/>
			</div>
			{/* Email */}
			<div className="flex rounded-lg">
				<span className="formContactLabel">Email</span>
				<input
					type="text"
					aria-label="email"
					placeholder="Ex: marcvini1105@gmail.com"
					className="formContactInput"
				/>
			</div>
			{/* Cellphone */}
			<div className="flex rounded-lg">
				<span className="formContactLabel">Cellphone</span>
				<input
					type="tel"
					aria-label="cellphone"
					placeholder="Ex: (75) 98104-2690"
					className="formContactInput"
				/>
			</div>
			{/* Topic */}
			<div className="flex rounded-lg">
				<span className="formContactLabel">Topic</span>
				<input
					type="text"
					aria-label="topic"
					placeholder="Suggestion"
					className="formContactInput"
				/>
			</div>
			{/* Description */}
			<div className="flex rounded-lg">
				<span className="formContactLabel">Description</span>
				<textarea aria-label="description" className="formContactInput h-40" />
			</div>
		</form>
	);
}
