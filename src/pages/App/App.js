import React from "react";
import { AppUI } from "./AppUI";
/* const todosDefault = [
	{ text: "Salir a correr", completed: true },
	{ text: "Programar la app", completed: false },
	{ text: "Salir con los compas", completed: false },
	{ text: "Dormir", completed: false },
	{ text: "Jugar unas partidas", completed: false },
	{ text: "Estudiar", completed: true },
	{ text: "Ir a nadar", completed: false },
	{ text: "Ver una película", completed: false },
	{ text: "Entregar tareas", completed: true },
	{ text: "Limpiar mi cuarto", completed: false },
	{ text: "Lavar los trastes", completed: true },
]; */

//Custom Hook
function useLocalStorage(itemName, initialState) {
	//Guardar el estado de los TODOS
	const [todos, setTodos] = React.useState(initialState);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	//UseEffect para simular llamada a una API
	React.useEffect(() => {
		setTimeout(() => {
			try {
				//Persistencia de los datos con LocalStorage
				const localStorageTodos = localStorage.getItem(itemName);
				let parsedTodos;
				if (!localStorageTodos) {
					localStorage.setItem(itemName, JSON.stringify(initialState));
					parsedTodos = initialState;
				} else {
					parsedTodos = JSON.parse(localStorageTodos);
				}
				setTodos(parsedTodos);
				setLoading(false);
			} catch (err) {
				setError(err);
			}
		}, 1000);
	}, []);

	//Guardar TODO
	const saveTodos = (newTodos) => {
		const stringifiedTodos = JSON.stringify(newTodos);
		localStorage.setItem(itemName, stringifiedTodos);
		setTodos(newTodos);
	};
	return { todos, saveTodos, loading, error };
}

function App() {
	const [searchValue, setSearchValue] = React.useState("");
	const { todos, saveTodos, loading, error } = useLocalStorage("TODOS_V1", []);

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
	return (
		<AppUI
			loading={loading}
			error={error}
			todosCompleted={todosCompleted}
			todosTotal={todosTotal}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			toggleCompleteTodo={toggleCompleteTodo}
			deleteTodo={deleteTodo}
			searchedTodos={searchedTodos}
		/>
	);
}

export default App;
