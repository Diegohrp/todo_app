import React from "react";
import { StyledInput } from "./Card";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";
const Search = styled(StyledInput)`
	margin-top: 20px;
`;
function TodoSearch() {
	const { searchValue, setSearchValue } = React.useContext(TodoContext);
	const onChangeValue = (event) => {
		//console.log(event.target.value);
		setSearchValue(event.target.value);
	};
	return (
		<Search
			type='text'
			placeholder='Busca una tarea'
			onChange={onChangeValue}
			value={searchValue}
		/>
	);
}

export { TodoSearch };
