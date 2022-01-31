import React from "react";
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { textFont, textColor } from "../GlobalStyles";
const StyledItem = styled.li`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style: none;
	font-family: ${textFont};
	font-size: 1.6rem;
	font-weight: 500;
	color: ${textColor};
	margin-bottom: 10px;
	border-bottom: 1px solid lightgray;

	div {
		width: 30px;
		height: 30px;
		background-color: whitesmoke;
		border-radius: 50%;
		border: 2px solid darkgray;
		position: relative;
	}
	div label {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		position: absolute;
		left: calc(50% - 11px);
		top: calc(50% - 11px);
		cursor: pointer;
		opacity: 0;

		.icon {
			width: 100%;
			height: 100%;
			color: #33b435;
		}
	}
	.label-true {
		opacity: 1;
	}

	input[type="checkbox"] {
		visibility: hidden;
	}
	.delete {
		width: 35px;
		height: 35px;
		cursor: pointer;
		color: darkred;
		&:hover {
			color: red;
		}
	}
	.true {
		text-decoration: line-through;
		font-weight: 700;
	}
	p {
		height: 25px;
		width: 200px;
		text-align: center;
		overflow: hidden;
	}
`;

function TodoItem({ id, text, completed, onToggleCompleteTodo, deleteTodo }) {
	const completeTodo = (event) => {
		onToggleCompleteTodo(event.target.name);
	};
	const onDelete = (e) => {
		deleteTodo(text);
	};
	return (
		<StyledItem>
			<div>
				<input id={id} name={text} type='checkbox' onClick={completeTodo} />
				<label htmlFor={id} className={`label-${completed.toString()}`}>
					<BsCheckCircleFill className='icon' />
				</label>
			</div>

			<p className={completed.toString()}>{text}</p>
			<TiDelete className='delete' onClick={onDelete} />
		</StyledItem>
	);
}

export { TodoItem, StyledItem };
