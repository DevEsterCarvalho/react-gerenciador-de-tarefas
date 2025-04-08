function AddTask() {
	return (
		<div className="space-y-4 p-6 bg-purple-400 rounded-md shadow">
			<input
				type="text"
				placeholder="Digite o título da tarefa"
				className="w-full text-left bg-white text-white outline-slate-300 placeholder-purple-500 p-2 rounded-md"
			></input>
			<input
				type="text"
				placeholder="Descrição da tarefa"
				className="w-full text-left bg-white text-white outline-slate-300 placeholder-purple-500 p-2 rounded-md"
			></input>
			<button className="w-full text-center text-white px-2 py-2 rounded-md font-medium bg-purple-500">
				Adicionar
			</button>
		</div>
	);
}

export default AddTask;
