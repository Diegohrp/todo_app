import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//React Hook useContext
const TodoContext = React.createContext();

//El provider contiene toda la lógica
//Se encarga de actualizar el estado de los componentes
function TodoProvider(props) {
	//Estado para el buscador
	const [searchValue, setSearchValue] = React.useState("");
	//Estado para el localStorage, loading y error
	const { todos, saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);
	//Estado para abrir o cerrar el modal
	const [modal, setModal] = React.useState(false);

	//Obtener las tareas completadas
	const todosCompleted = todos.filter((todo) => todo.completed).length;
	//Total de tareas
	const todosTotal = todos.length;
	//Filtrar los TODOS
	let searchedTodos = [];
	if (searchValue.length <= 1) {
		searchedTodos = todos;
	} else {
		const searchText = searchValue.toLowerCase();
		searchedTodos = todos.filter((todo) => {
			return todo.text.toLowerCase().includes(searchText);
		});
	}

	//Completar TODO
	const toggleCompleteTodo = (name) => {
		const todoIndex = todos.findIndex((todo) => todo.text === name);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = newTodos[todoIndex].completed
			? false
			: true;
		saveTodos(newTodos);
	};
	//Eliminar TODO
	const deleteTodo = (name) => {
		const todoIndex = todos.findIndex((todo) => todo.text === name);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	//Añadir TODO
	const addTodo = (name) => {
		const newTodos = [...todos];
		newTodos.push({ text: name, completed: false });
		saveTodos(newTodos);
	};

	//Se encapsula toda la app en un Context.Provider
	//value es un objeto que contiene lo que eran props y estado
	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				todosCompleted,
				todosTotal,
				searchValue,
				setSearchValue,
				toggleCompleteTodo,
				deleteTodo,
				searchedTodos,
				modal,
				setModal,
				addTodo,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	);
}
//Se exporta el contexto y la función provider
export { TodoContext, TodoProvider };
