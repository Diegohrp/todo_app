import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../../context/TodoContext";

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

//Envolver toda la app en el Provider
function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
