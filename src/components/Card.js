import React from "react";
import urlImg from "../assets/img/task_img.svg";
import styled from "styled-components";
import { useAddNewTodo } from "../hooks/useAddNewTodo";
import {
	primaryColor,
	darkPrimaryColor,
	accentColor,
	textColor,
	titlesFont,
	textFont,
} from "./GlobalStyles";
const StyledArticle = styled.article`
	width: 350px;
	height: 550px;
	flex-direction: column;
	padding: 30px;
	background-color: whitesmoke;
	border-radius: 15px;
	box-shadow: 9px 10px 11px -4px rgba(0, 0, 0, 0.27);
	display: none;
	@media (min-width: 700px) {
		display: flex;
	}
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
`;
const StyledTitle = styled.h1`
	margin: 20px 0;
	text-align: center;
	font-size: 2.4rem;
	font-family: ${titlesFont};
	color: ${darkPrimaryColor};
`;
const StyledLabel = styled.label`
	font-size: 1.4rem;
	font-family: ${textFont};
	color: ${primaryColor};
	font-weight: 700;
	margin-bottom: 5px;
`;
const StyledInput = styled.input`
	height: 30px;
	padding-left: 10px;
	border: none;
	border-radius: 10px;
	margin-bottom: 20px;
	font-size: 1.4rem;
	font-family: ${textFont};
	font-weight: 500;
	color: ${textColor};
	outline: none;
	box-shadow: 9px 10px 11px -4px rgba(0, 0, 0, 0.27);
	&::placeholder {
		font-size: 1.4rem;
		font-family: ${textFont};
		font-weight: 300;
	}
`;
const StyledButton = styled.button`
	height: 35px;
	width: 50%;
	background-color: ${primaryColor};
	align-self: center;
	border-radius: 8px;
	border: none;
	font-family: ${textFont};
	font-size: 1.5rem;
	color: white;
	margin-bottom: 30px;
	&:hover {
		background-color: ${accentColor};
		cursor: pointer;
	}
	&:active {
		background-color: ${darkPrimaryColor};
	}
`;
const StyledImg = styled.img`
	width: 320px;
	height: 320px;
	align-self: center;
`;
function Card({ addTodo }) {
	const { newTodoValue, onChange, onSubmit } = useAddNewTodo({
		setModal: undefined,
		addTodo,
	});
	return (
		<StyledArticle>
			<StyledTitle>Crear nueva tarea</StyledTitle>
			<form onSubmit={onSubmit}>
				<StyledLabel htmlFor='taskD'>Nombre de la tarea</StyledLabel>
				<StyledInput
					id='taskD'
					type='text'
					placeholder='Tarea pendiente'
					onChange={onChange}
					value={newTodoValue}
				/>
				<StyledButton type='submit'>Crear tarea</StyledButton>
			</form>

			<StyledImg alt='decoration' src={urlImg} />
		</StyledArticle>
	);
}
export { Card, StyledInput };
