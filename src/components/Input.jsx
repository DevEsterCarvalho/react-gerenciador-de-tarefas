function Input(props) {
	return (
		<input
			className="w-full text-left bg-white text-purple-500 outline-slate-300 placeholder-purple-500 p-2 rounded-md"
			{...props}
		></input>
	);
}

export default Input;
