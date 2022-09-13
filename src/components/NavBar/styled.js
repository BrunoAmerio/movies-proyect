import styled from 'styled-components';

export const InputContainer = styled.div`
	width: 50%;
	margin: auto;

	input {
		border: none;
		border-radius: 8px;
		height: 30px;
		width: 100%;
		padding: 0px 10px;

		&:focus {
			outline: none;
		}
	}
`;

export const Logo = styled.div`
	width: 50px;
	position: absolute;
	left: 20px;
	top: 5px;
	height: 50px;
	background-color: red;
	cursor: pointer;
`;
