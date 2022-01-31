import React from "react";
import { List } from "../TodoList/TodoList";
import styled from "styled-components";

const SkeletonList = styled(List)``;
const SkeletonItem = styled.i`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	border-bottom: 1px solid lightgray;
	.icons {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: black;
	}
	.text {
		width: 200px;
		height: 20px;
		background-color: black;
		border-radius: 20px;
	}

	.icons,
	.text {
		background: linear-gradient(
			90deg,
			rgba(220, 220, 220, 1),
			rgb(190, 190, 190)
		);
		background-size: 400% 400%;
		animation: loadingAnimation 3s ease-in-out infinite;
	}
	@keyframes loadingAnimation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;

function TodosLoading() {
	return (
		<SkeletonList>
			{new Array(5).fill(1).map((a, i) => (
				<SkeletonItem key={i}>
					<div className='icons'></div>
					<div className='text'></div>
					<div className='icons'></div>
				</SkeletonItem>
			))}
		</SkeletonList>
	);
}

export { TodosLoading };
