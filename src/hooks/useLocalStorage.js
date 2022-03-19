import React from "react";
//Custom Hook
function useLocalStorage(itemName, initialState) {
	//Guardar el estado de los TODOS
	const [todos, setTodos] = React.useState(initialState);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);
	//Estado para sincronizar los cambios entre pestañas
	const [sincronizedItem, setSincronizedItem] = React.useState(true);

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
				//throw new error();
				setTodos(parsedTodos);
				setLoading(false);
				setSincronizedItem(true);
			} catch (err) {
				setLoading(false);
				setError(err);
			}
		}, 2000);
	}, [sincronizedItem]);

	//Guardar TODO
	const saveTodos = (newTodos) => {
		const stringifiedTodos = JSON.stringify(newTodos);
		localStorage.setItem(itemName, stringifiedTodos);
		setTodos(newTodos);
	};
	const sincronizeItem = () => {
		setLoading(true);
		setSincronizedItem(false);
	};
	return { todos, saveTodos, loading, error, sincronizeItem };
}

export { useLocalStorage };
