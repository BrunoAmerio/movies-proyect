import styled from 'styled-components';

export const Container = styled.div`
	min-height: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #285f92;
	border-radius: 0px 0px 4px 4px;

	.title {
		width: 50%;

		h1,
		h3 {
			margin: 0;
			color: white;
		}
	}
`;

export const InputContainer = styled.div`
	width: 50%;
	margin: auto;
	position: relative;

	input {
		height: 40px;
		width: 100%;
		min-width: 300px;
		padding: 0px 10px;

		background-color: white;
		border: none;
		border-radius: 10px;
		font-size: 15px;

		&:focus {
			outline: none;
		}
	}

	.searchIcon {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 10%;
		height: 100%;

		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);

		border: none;
		border-radius: 10px;
		background: linear-gradient(270deg, #19d279 0%, #33ffda 100%);
		cursor: pointer;
	}
`;

export const Logo = styled.div`
	width: 50px;
	position: absolute;
	left: 20px;
	top: 0px;
	background-color: red;
	cursor: pointer;
`;
