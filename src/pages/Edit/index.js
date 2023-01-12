import React from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useTodos } from '../../hooks/useTodos';
import { FormEdit } from './FormEdit';
import { EditTodoLoading } from '../../components/skeletons/EditTodoLoading';

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { editTodos, findById, loading } = useTodos();
  let currentTodo;

  const onCancel = () => {
    navigate('/');
  };
  const onEdit = (e, newText) => {
    e.preventDefault();
    editTodos(id, newText);
    navigate('/');
  };

  if (location.state) {
    currentTodo = location.state.text;
  } else if (loading) {
    return (
      <main className='edit'>
        <EditTodoLoading />
      </main>
    );
  } else {
    currentTodo = findById(id).text;
  }

  return (
    <main className='edit'>
      <FormEdit
        todoText={currentTodo}
        onEdit={onEdit}
        onCancel={onCancel}
      />
    </main>
  );
}

export { Edit };
