import React from "react";
import styled from "styled-components";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList/TodoList";
import { TodoItem } from "../../components/TodoList/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { GlobalStyle } from "../../components/GlobalStyles";
import { Card } from "../../components/Card";

const Container = styled.div`
	background-color: whitesmoke;
	width: 350px;
	height: 550px;
	padding: 20px;
	display: flex;
	flex-direction: column;

	border-radius: 15px;
	box-shadow: 9px 10px 11px -4px rgba(0, 0, 0, 0.27);
	position: relative;
	@media (min-width: 700px) {
		width: 320px;
	}
`;
function AppUI({
	loading,
	error,
	todosCompleted,
	todosTotal,
	searchValue,
	setSearchValue,
	toggleCompleteTodo,
	deleteTodo,
	searchedTodos,
}) {
	return (
		<>
			<GlobalStyle />
			<Card />
			<Container>
				<TodoCounter completed={todosCompleted} total={todosTotal} />
				<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
				<TodoList>
					{error && <p>Hubo un error, recarga la página...</p>}
					{loading && <p>Estamos cargando...</p>}
					{!loading && searchedTodos.length === 0 && (
						<p>Crea tu primer tarea</p>
					)}
					{searchedTodos.map((item) => (
						<TodoItem
							key={Math.random().toString(36).slice(2)}
							id={Math.random().toString(36).slice(2)}
							text={item.text}
							completed={item.completed}
							onToggleCompleteTodo={toggleCompleteTodo}
							deleteTodo={deleteTodo}
						/>
					))}
				</TodoList>
				<CreateTodoButton />
			</Container>
		</>
	);
}
export { AppUI };
