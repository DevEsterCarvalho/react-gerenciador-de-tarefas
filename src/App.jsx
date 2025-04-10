import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { Await } from "react-router-dom";
import Title from "./components/Title";

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

	/*chamar uma api fake para ter as tarefas
	useEffect(() => {
		async function fetchData() {
			try {
				//chamando api
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/todos?_limit=10",
					{
						method: "GET",
					}
				);
				//pegando os dados que a api retornou
				const data = await response.json();

				//persistindo os dados que ela retorna
				setTasks(data);
			} catch (error) {
				console.error("Erro ao buscar os dados:", error);
			}
		}

		fetchData();
	}, []);*/

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
		<div className="w-screen min-h-screen bg-purple-300 flex justify-center p-6">
			<div className="w-[500px] space-y-4">
				<Title className="text-3xl text-white font-bold text-center">
					Gerenciador de Tarefas
				</Title>
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
