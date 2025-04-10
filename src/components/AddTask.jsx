import React from "react";
import Input from "./Input";

function AddTask({ addTaskSubmit }) {
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	return (
		<div className="space-y-4 p-6 bg-purple-400 rounded-md shadow">
			<Input
				type="text"
				placeholder="Digite o título da tarefa"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<Input
				type="text"
				placeholder="Digite a descrição da tarefa"
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<button
				onClick={() => {
					if (!title.trim() || !description.trim()) {
						return alert("Preencha o título e a descrição da tarefa");
					}
					addTaskSubmit(title, description);
					setTitle("");
					setDescription("");
				}}
				className="w-full text-center text-white px-2 py-2 rounded-md font-medium bg-purple-500"
			>
				Adicionar
			</button>
		</div>
	);
}

export default AddTask;
