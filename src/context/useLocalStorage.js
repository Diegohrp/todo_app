import React from "react";
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

export { useLocalStorage };
