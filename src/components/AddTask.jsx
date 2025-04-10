import React from "react";

function AddTask({ addTaskSubmit }) {
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	return (
		<div className="space-y-4 p-6 bg-purple-400 rounded-md shadow">
			<input
				type="text"
				placeholder="Digite o título da tarefa"
				className="w-full text-left bg-white text-purple-500 outline-slate-300 placeholder-purple-500 p-2 rounded-md"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			></input>
			<input
				type="text"
				placeholder="Descrição da tarefa"
				className="w-full text-left bg-white text-purple-500 outline-slate-300 placeholder-purple-500 p-2 rounded-md"
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			></input>
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
