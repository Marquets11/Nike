export default function FormLogin() {
	return (
		<form className="">
			<div className="flex rounded-lg">
				<span className="formContactLabel">Email</span>
				<input type="email" aria-label="email" className="formContactInput" />
			</div>
			<div className="flex rounded-lg">
				<span className="formContactLabel">Password</span>
				<input
					type="password"
					aria-label="password"
					className="formContactInput"
				/>
			</div>
		</form>
	);
}
