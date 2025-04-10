import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const title = searchParams.get("title") || "Sem título";
	const description = searchParams.get("description") || "Sem descrição.";

	return (
		<div className="h-screen w-screen bg-purple-500 p-6 flex justify-center">
			<div className="w-[500px] space-y-4">
				<div className="flex justify-center relative mb-6">
					<button
						onClick={() => navigate(-1)}
						className="absolute left-0 text-white top-0 bottom-0"
					>
						<ChevronLeftIcon />
					</button>
					<Title className="text-3xl text-slate-100 font-bold text-center">
						Detalhes da Tarefa
					</Title>
				</div>
				<div className="bg-purple-300 p-4 rounded-md">
					<h2 className="text-xl text-purple-500 font-bold">{title}</h2>
					<p className="text-white">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default TaskPage;
