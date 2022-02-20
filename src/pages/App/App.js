import React from "react";
import styled from "styled-components";
import { useTodos } from "../../hooks/useTodos";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList/TodoList";
import { TodoItem } from "../../components/TodoList/TodoItem";
import { CreateTodoButton } from "../../components/CreateTodoButton";
import { GlobalStyle } from "../../components/GlobalStyles";
import { Card } from "../../components/Card";
import { Modal } from "../../components/Modal/Modal";
import { CreateNewTodo } from "../../components/Modal/CreateNewTodo";
import { NoAdded } from "../../components/Modal/NoAdded";
import { TodosLoading } from "../../components/skeletons/TodosLoading";
import { ErrorTodos } from "../../components/skeletons/ErrorTodos";
import { NotFoundTodos } from "../../components/skeletons/NotFoundTodos";
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
function App() {
	//sugar sintax para render props
	//Se desestructura el value del TodoContext.Provider
	const {
		error,
		loading,
		searchedTodos,
		toggleCompleteTodo,
		deleteTodo,
		modal,
		setModal,
		addTodo,
		noAddedModal,
		setNoAddedModal,
		todosCompleted,
		todosTotal,
		searchValue,
		setSearchValue,
	} = useTodos("");

	return (
		<>
			<GlobalStyle />
			<Card addTodo={addTodo} />
			<Container>
				<TodoCounter todosCompleted={todosCompleted} todosTotal={todosTotal} />
				<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

				<TodoList
					error={error}
					loading={loading}
					searchedTodos={searchedTodos}
					todosTotal={todosTotal}
					searchValue={searchValue}
					onError={() => <ErrorTodos />}
					onLoading={() => <TodosLoading />}
					EmptyTodos={() => <NotFoundTodos text='No tienes ninguna tarea' />}
					EmptySearchResults={(searchText) => (
						<NotFoundTodos text={`No hay resultados para ${searchText}`} />
					)}
					render={(item) => (
						<TodoItem
							key={Math.random().toString(36).slice(2)}
							id={Math.random().toString(36).slice(2)}
							text={item.text}
							completed={item.completed}
							onToggleCompleteTodo={toggleCompleteTodo}
							deleteTodo={deleteTodo}
						/>
					)}
				>
					{/* {(item) => (
						<TodoItem
							key={Math.random().toString(36).slice(2)}
							id={Math.random().toString(36).slice(2)}
							text={item.text}
							completed={item.completed}
							onToggleCompleteTodo={toggleCompleteTodo}
							deleteTodo={deleteTodo}
						/>
					)} */}
				</TodoList>

				{modal && (
					<Modal>
						<CreateNewTodo setModal={setModal} addTodo={addTodo} />
					</Modal>
				)}

				<CreateTodoButton modal={modal} setModal={setModal} />
			</Container>
			{noAddedModal.open && (
				<Modal>
					<NoAdded
						noAddedModal={noAddedModal}
						setNoAddedModal={setNoAddedModal}
					/>
				</Modal>
			)}
		</>
	);
}
export { App };
