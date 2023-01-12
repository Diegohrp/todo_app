import React from 'react';
import styled from 'styled-components';
import { Cancel, Save } from '../Modal/CreateNewTodo';
import { loadingAnim } from './animation';

const SkeletonContainer = styled.div`
  width: min(90%, 500px);
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  div:first-child {
    background-color: black;
    width: 70%;
    height: 25px;
    border-radius: 20px;
  }

  div:nth-child(2) {
    background-color: black;
    width: 80%;
    height: 40%;
    border-radius: 10px;
  }
  div {
    background: linear-gradient(
      90deg,
      rgba(220, 220, 220, 1),
      rgb(190, 190, 190)
    );
    background-size: 400% 400%;
    ${loadingAnim()}
  }
  section {
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

function EditTodoLoading() {
  return (
    <SkeletonContainer>
      <div></div>
      <div></div>
      <section>
        <Cancel type='button' value='Cancelar' />
        <Save type='button' value='Guardar' />
      </section>
    </SkeletonContainer>
  );
}

export { EditTodoLoading };
