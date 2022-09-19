import styled from 'styled-components';
import device from '../../config/mediaQueries';

export const Logo = styled.div`
	width: 60px;
	position: absolute;
	left: 20px;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;

	@media ${device.mobileL} {
		width: 35px;
		position: relative !important;
		transform: translateY(0%);
	}
`;

export const InputContainer = styled.div`
	width: 50%;
	min-width: 200px;
	margin: auto;
	position: relative;

	input {
		height: 35px;
		width: 100%;
		min-width: 200px;
		padding: 0px 45px 0px 10px;

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
		min-width: 40px;
		height: 103%;

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

export const Container = styled.div`
	min-height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-around;
	align-items: center;
	background: linear-gradient(270deg, #2461fd 0%, #00c2ff 100%);
	border-radius: 0px 0px 4px 4px;
	position: relative;

	.title {
		width: 50%;

		h1,
		h3 {
			margin: 0;
			color: white;
		}
	}
`;
