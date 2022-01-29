import React from "react";
import styled from "styled-components";
import { primaryColor } from "../GlobalStyles";

const List = styled.section`
	width: 100%;
	height: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
	/* width */
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
	/* Track */
	::-webkit-scrollbar-track {
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: ${primaryColor};
		border-radius: 10px;
	}
	@media (min-width: 700px) {
		height: 450px;
	}
`;

function TodoList(props) {
	return <List>{props.children}</List>;
}

export { TodoList };
