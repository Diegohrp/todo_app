import React from 'react';
import styled from 'styled-components';
import { useTodos } from '../../hooks/useTodos';
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoItem } from '../../components/TodoList/TodoItem';
import { CreateTodoButton } from '../../components/CreateTodoButton';
import { Card } from '../../components/Card';
import { Modal } from '../../components/Modal/Modal';
import { CreateNewTodo } from '../../components/Modal/CreateNewTodo';
import { NoAdded } from '../../components/Modal/NoAdded';
import { TodosLoading } from '../../components/skeletons/TodosLoading';
import { ErrorTodos } from '../../components/skeletons/ErrorTodos';
import { NotFoundTodos } from '../../components/skeletons/NotFoundTodos';
import { TodoHeader } from '../../components/TodoHeader';
import { ChangeAlert } from '../../components/ChangeAlert';
const Container = styled.article`
  background-color: whitesmoke;
  width: min(90%, 350px);
  height: 550px;
  padding: 20px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 9px 10px 11px -4px rgba(0, 0, 0, 0.27);
  position: relative;
`;
function Todos() {
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
    sincronizeItem,
  } = useTodos('');

  return (
    <main className='todos'>
      <Card addTodo={addTodo} />
      <Container>
        <TodoHeader loading={loading}>
          <TodoCounter
            todosCompleted={todosCompleted}
            todosTotal={todosTotal}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          todosTotal={todosTotal}
          searchValue={searchValue}
          onError={() => <ErrorTodos />}
          onLoading={() => <TodosLoading />}
          EmptyTodos={() => (
            <NotFoundTodos text='No tienes ninguna tarea' />
          )}
          EmptySearchResults={(searchText) => (
            <NotFoundTodos
              text={`No hay resultados para ${searchText}`}
            />
          )}
          render={(item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              onToggleCompleteTodo={toggleCompleteTodo}
              deleteTodo={deleteTodo}
            />
          )}>
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
      <ChangeAlert sincronize={sincronizeItem} />
    </main>
  );
}
export { Todos };
