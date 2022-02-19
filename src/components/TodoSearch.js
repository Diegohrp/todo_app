import React from "react";
import { StyledInput } from "./Card";
import styled from "styled-components";
const Search = styled(StyledInput)`
	margin-top: 20px;
`;
function TodoSearch({ searchValue, setSearchValue }) {
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
