import React from "react";
import { WithStorageListener } from "./WithStorageListener";
import styled from "styled-components";
import { ModalBackground } from "../Modal/Modal";
import { Save } from "../Modal/CreateNewTodo";
const Alert = styled(ModalBackground)`
	align-items: flex-end;
	div {
		background-color: black;
		width: 100%;
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;

		p {
			color: white;
			font-size: 1.8rem;
			text-align: center;
		}
	}
`;

function ChangeAlert({ show, toggleShow }) {
	if (show) {
		return (
			<Alert>
				<div>
					<p>
						Parece que hiciste cambios en tus TODOS desde otra pestaña o ventana
						¿Deseas sincronizar tus TODOS?
					</p>
					<Save type='submit' value='Yes' onClick={() => toggleShow()} />
				</div>
			</Alert>
		);
	} else {
		return null;
	}
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
