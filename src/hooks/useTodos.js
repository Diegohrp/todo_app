import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//Se encarga de actualizar el estado de los componentes
function useTodos() {
	//Estado para el buscador
	const [searchValue, setSearchValue] = React.useState("");
	//Estado para el localStorage, loading y error
	const { todos, saveTodos, loading, error, sincronizeItem } = useLocalStorage(
		"TODOS_V1",
		[]
	);
	//Estado para abrir o cerrar el modal
	const [modal, setModal] = React.useState(false);
	//Advertencia de tarea existente
	const [noAddedModal, setNoAddedModal] = React.useState({});

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
		const exist = newTodos.find((todo) => todo.text === name);
		console.log(name);
		console.log(exist);
		if (exist) {
			setNoAddedModal({ text: name, open: true });
		} else {
			newTodos.push({ text: name, completed: false });
			saveTodos(newTodos);
		}
	};
	//Se retorna todo el estado de la aplicación
	return {
		loading,
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
		setNoAddedModal,
		noAddedModal,
		sincronizeItem,
	};
}
//Se exporta el custom hook
export { useTodos };
