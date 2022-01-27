import React from "react";
import styled from "styled-components";
import { MdOutlineAdd } from "react-icons/md";
import { accentColor, darkPrimaryColor, primaryColor } from "./GlobalStyles";
const Button = styled.button`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: ${accentColor};
	position: absolute;
	bottom: 10px;
	left: calc(50% - 20px);
	border: none;
	&:hover {
		cursor: pointer;
		background-color: ${primaryColor};
	}
	&:active {
		background-color: ${darkPrimaryColor};
	}
	.icon {
		color: white;
		width: 50px;
		height: 50px;
	}
	@media (min-width: 700px) {
		display: none;
	}
`;

function CreateTodoButton() {
	return (
		<Button>
			<MdOutlineAdd className="icon" />
		</Button>
	);
}

export { CreateTodoButton };
