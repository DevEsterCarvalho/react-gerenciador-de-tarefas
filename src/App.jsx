import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState(() => {
		try {
			const storedTasks = localStorage.getItem("tasks");
			return storedTasks ? JSON.parse(storedTasks) : [];
		} catch (error) {
			console.error("Erro ao fazer parse do localStorage:", error);
			return [];
		}
	});

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

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
