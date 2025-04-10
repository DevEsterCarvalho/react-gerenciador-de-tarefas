import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTasksClick, removeTasks }) {
	const navigate = useNavigate();

	function onSeeDetailsClick(task) {
		const query = new URLSearchParams();
		query.set("title", task.title);
		query.set("description", task.description);
		navigate(`/task?${query.toString()}`);
	}

	return (
		<ul className="space-y-4 p-6 bg-purple-400 rounded-md shadow">
			{tasks.map((task) => (
				<li key={task.id} className="flex gap-2">
					<button
						onClick={() => onTasksClick(task.id)}
						className={` w-full text-left bg-purple-300 text-white p-2 rounded-md ${
							task.isComplited && "line-through"
						}`}
					>
						{task.title}
					</button>
					<button
						onClick={() => onSeeDetailsClick(task)}
						className="bg-purple-300 text-white p-2 rounded-md"
					>
						<ChevronRightIcon />
					</button>

					<button
						onClick={() => removeTasks(task.id)}
						className={` bg-purple-300 text-white p-2 rounded-md ${
							task.remove && "line-through"
						}`}
					>
						<TrashIcon />
					</button>
				</li>
			))}
		</ul>
	);
}

export default Tasks;
