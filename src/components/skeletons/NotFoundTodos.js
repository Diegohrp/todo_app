import React from "react";
import styled from "styled-components";
import { Container } from "./ErrorTodos";
import notFoundURL from "../../assets/img/empty_img.svg";
const NotFound = styled(Container)`
	p {
		margin-top: 20px;
	}
`;

function NotFoundTodos(props) {
	return (
		<NotFound>
			<img alt='error img' src={notFoundURL} />
			<p>{props.text}</p>
		</NotFound>
	);
}

export { NotFoundTodos };
