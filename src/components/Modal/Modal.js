import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalBackground = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;

	background: rgba(0, 188, 212, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	font-size: 2.8rem;
`;

function Modal(props) {
	return ReactDOM.createPortal(
		<ModalBackground>{props.children}</ModalBackground>,
		document.getElementById("portal")
	);
}

export { Modal };
