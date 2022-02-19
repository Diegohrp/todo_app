import React from "react";
import { useTodos } from "./useTodos";

function useAddNewTodo(initialState) {
	//Se obtiene del contexto la función para añadir tarea y setModal
	const { addTodo, setModal } = initialState;
	//Estado del componente textarea (su valor)
	const [newTodoValue, setNewTodoValue] = React.useState("");

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
		if (setModal !== undefined) {
			setModal(false);
		}
	};
	return { newTodoValue, onCancel, onChange, onSubmit };
}

export { useAddNewTodo };
