import React from "react";
import styled from "styled-components";
import errorImgURL from "../../assets/img/error_img.svg";
import { darkPrimaryColor, textFont } from "../GlobalStyles";
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		width: 200px;
		height: 200px;
	}
	p {
		font-family: ${textFont};
		color: ${darkPrimaryColor};
		font-size: 1.8rem;
		text-align: center;
	}
`;

function ErrorTodos() {
	return (
		<Container>
			<img alt='error img' src={errorImgURL} />
			<p>Ha ocurrido un error, por favor recarga la página.</p>
		</Container>
	);
}

export { ErrorTodos, Container };
