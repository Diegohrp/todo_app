import React from "react";
import styled from "styled-components";
import { primaryColor, accentColor, textFont } from "../GlobalStyles";
import { Button } from "./CreateNewTodo";

const Container = styled.div`
	width: 350px;
	height: 200px;
	padding: 20px;
	display: grid;
	justify-items: center;

	background-color: white;
	p {
		font-family: ${textFont};
		font-size: 2rem;
		font-weight: 500;
		color: #da1212;
		text-align: center;
		margin-bottom: 60px;
	}
`;
const Accept = styled(Button)`
	width: 200px;
	color: white;
	background-color: ${accentColor};
	cursor: pointer;
	&:hover {
		background-color: ${primaryColor};
	}
	&:active {
		transform: scale(1.2);
	}
`;

function NoAdded({ noAddedModal, setNoAddedModal }) {
	const closeModal = () => {
		setNoAddedModal({ text: "", open: false });
	};
	return (
		<Container>
			<p>La tarea {`"${noAddedModal.text}"`} ya ha sido agregada</p>
			<Accept value='Aceptar' type='button' onClick={closeModal} />
		</Container>
	);
}
export { NoAdded };
