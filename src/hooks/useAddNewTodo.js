import React from "react";
import { TodoContext } from "../context/TodoContext";

function useAddNewTodo(initialState) {
	//Se obtiene del contexto la función para añadir tarea y setModal
	const { addTodo, setModal } = React.useContext(TodoContext);
	//Estado del componente textarea (su valor)
	const [newTodoValue, setNewTodoValue] = React.useState(initialState);

	const onCancel = () => {
		setModal(false);
	};
	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setNewTodoValue("");
		setModal(false);
	};
	return { newTodoValue, onCancel, onChange, onSubmit };
}

export { useAddNewTodo };
