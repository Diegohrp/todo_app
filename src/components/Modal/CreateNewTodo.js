import React from "react";
import styled from "styled-components";
import { useAddNewTodo } from "../../hooks/useAddNewTodo";
import {
	accentColor,
	darkPrimaryColor,
	textFont,
	titlesFont,
} from "../GlobalStyles";

const Button = styled.input`
	width: 100px;
	height: 40px;

	font-family: ${textFont};
	font-size: 1.6rem;
	font-weight: 500;
	border: none;
	outline: none;
	border-radius: 5px;
`;
const Cancel = styled(Button)`
	background-color: red;
	color: whitesmoke;
	&:active {
		transform: scale(1.2);
		transition: transform 0.1s ease-out;
	}
`;
const Save = styled(Button)`
	background-color: ${accentColor};
	color: whitesmoke;
	&:active {
		transform: scale(1.2);
		transition: transform 0.1s ease-out;
	}
`;

const Form = styled.form`
	width: 320px;
	height: 250px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	box-shadow: 9px 10px 11px -4px rgba(0, 0, 0, 0.27);
	label {
		font-family: ${titlesFont};
		font-weight: 700;
		font-size: 2.5rem;
		color: ${darkPrimaryColor};
	}
	textarea {
		width: 200px;
		height: 120px;
		font-size: 1.8rem;
		font-family: ${textFont};
		font-weight: 500;
		padding: 10px;
		resize: none;

		&:hover {
			outline: 1px solid ${accentColor};
		}
	}
	div {
		width: 70%;
		display: flex;
		justify-content: space-between;
	}
`;

function CreateNewTodo({ setModal, addTodo }) {
	const { newTodoValue, onCancel, onChange, onSubmit } = useAddNewTodo({
		setModal,
		addTodo,
	});
	return (
		<Form onSubmit={onSubmit}>
			<label htmlFor='new-task'>Escribe tu nueva tarea</label>
			<textarea
				placeholder='Nueva tarea'
				id='new-task'
				onChange={onChange}
				value={newTodoValue}
			/>
			<div>
				<Cancel type='button' value='Cancelar' onClick={onCancel} />
				<Save type='submit' value='Guardar' />
			</div>
		</Form>
	);
}

export { CreateNewTodo, Button, Save };
