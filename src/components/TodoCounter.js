import React from "react";
import styled from "styled-components";
import { titlesFont, accentColor } from "./GlobalStyles";
const Counter = styled.h2`
	font-family: ${titlesFont};
	font-size: 2.3rem;
	font-weight: 700;
	color: ${accentColor};
	text-align: center;
`;

function TodoCounter({ todosCompleted, todosTotal }) {
	return (
		<Counter>
			Haz completado {todosCompleted} de {todosTotal} tareas
		</Counter>
	);
}

export { TodoCounter };
