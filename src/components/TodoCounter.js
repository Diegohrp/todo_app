import React from "react";
import styled from "styled-components";
import { titlesFont, accentColor } from "./GlobalStyles";
const Counter = styled.h2`
	font-family: ${titlesFont};
	font-size: 2.3rem;
	font-weight: 700;
	color: ${accentColor};

	text-align: center;
	&.true {
		opacity: 0.25;
	}
`;

function TodoCounter({ todosCompleted, todosTotal, loading }) {
	return (
		<Counter className={loading}>
			Haz completado {todosCompleted} de {todosTotal} tareas
		</Counter>
	);
}

export { TodoCounter };
