import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "Estudar Programação",
			description: "Estudar programação para se tornar um desenvolvedor",
			isComplited: false,
		},
		{
			id: 2,
			title: "Estudar Matemática",
			description: "Estudar matemática para se tornar um desenvolvedor",
			isComplited: false,
		},
		{
			id: 3,
			title: "Estudar Inglês",
			description: "Estudar inglês para se tornar um desenvolvedor",
			isComplited: false,
		},
	]);

	function onTasksClick(taskId) {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) {
				return { ...task, isComplited: !task.isComplited };
			}
			return task;
		});
		setTasks(newTasks);
	}

	function removeTasks(taskId) {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
	}

	function addTaskSubmit(title, description) {
		const newTask = {
			id: tasks.length + 1,
			title: title,
			description: description,
			isComplited: false,
		};
		setTasks([...tasks, newTask]);
	}

	return (
		<div className="w-screen h-screen bg-purple-500 flex justify-center p-6">
			<div className="w-[500px] space-y-4">
				<h1 className="text-3xl text-white font-bold text-center">
					Gerenciador de Tarefas 
				</h1>
				<AddTask addTaskSubmit={addTaskSubmit} />
				<Tasks
					tasks={tasks}
					onTasksClick={onTasksClick}
					removeTasks={removeTasks}
				/>
			</div>
		</div>
	);
}

export default App;
