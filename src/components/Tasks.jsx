import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
	return (
		<ul className="space-y-4 p-6 bg-purple-500 rounded-md shadow">
			{props.tasks.map((task) => (
				<li key={Tasks.id} className="flex gap-2">
					<button className=" w-full text-left bg-purple-300 text-white p-2 rounded-md">
						{task.title}
					</button>
					<button className="bg-purple-300 text-white p-2 rounded-md">
						<ChevronRightIcon />
					</button>
				</li>
			))}
		</ul>
	);
}

export default Tasks;
