import IMAGES from "../images/images";

export default function AboutPage() {
	return (
		<main className="flex-1 bg-black overflow-auto py-4 px-2 sm:px-20">
			<img
				src={IMAGES.employees}
				alt="Employees working"
				className="rounded-full h-52 w-full object-cover border-4 ring-4 ring-white ring-opacity-35 hover:ring-opacity-100 hover:ring-green-600 border-white hover:border-black duration-300"
			/>

			<div className="p-2 mt-4">
				<h1 className="text-4xl text-green-600 text-center font-extrabold">
					About us
				</h1>
				<div className="flex flex-col gap-2 font-semibold text-justify text-white mt-2">
					<p>
						A Nike, Inc. é uma das marcas mais reconhecidas e influentes no
						mundo da moda esportiva e lifestyle. Amplamente conhecida por sua
						dedicação à inovação e ao desenvolvimento de produtos de alta
						qualidade. Desde os seus primeiros dias, a empresa sempre buscou
						avançar em termos de design e tecnologia esportiva. A introdução da
						tecnologia Nike Air em tênis de corrida e o desenvolvimento contínuo
						de materiais avançados para calçados e roupas são apenas alguns
						exemplos da constante busca por excelência.
					</p>
					<p>
						Além de sua presença dominante na indústria esportiva, a Nike também
						se destacou em iniciativas sociais e ambientais. A empresa tem
						trabalhado para melhorar as condições de trabalho em suas fábricas
						ao redor do mundo e tem adotado práticas sustentáveis em suas
						operações. Essa abordagem reflete uma conscientização crescente
						sobre responsabilidade corporativa e sustentabilidade.
					</p>
					<p>
						A Nike continua a ser uma força dominante na indústria de roupas e
						calçados esportivos, mantendo-se fiel à sua missão de inspirar
						atletas e inovar constantemente.
					</p>
				</div>
			</div>
		</main>
	);
}
