import React from 'react';
import styled from 'styled-components';
import {
  Form,
  Cancel,
  Save,
} from '../../components/Modal/CreateNewTodo';

const EditForm = styled(Form)`
  width: min(90%, 500px);
  height: 400px;
  label {
    text-align: center;
  }
  textArea {
    width: 80%;
    height: 40%;
    outline: none;
    /* text-align: center; */
  }
`;

function FormEdit({ todoText, onEdit, onCancel }) {
  const [newTodoValue, setNewTodoValue] = React.useState(todoText);
  return (
    <EditForm>
      <label htmlFor='new-task'>
        Cambia el contenido de tu tarea
      </label>
      <textarea
        placeholder='Edita tu tarea'
        id='new-task'
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
      />
      <div>
        <Cancel type='button' value='Cancelar' onClick={onCancel} />
        <Save
          type='submit'
          value='Guardar'
          onClick={(e) => onEdit(e, newTodoValue)}
        />
      </div>
    </EditForm>
  );
}

export { FormEdit };
