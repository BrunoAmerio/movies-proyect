import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	color: white;
	background-color: #032000;
	border-radius: 50%;

	.progress {
		fill: none;
		stroke-width: 3;
		stroke-dasharray: 160;
	}
	.background {
		fill: none;
		stroke-width: 2.5;
	}

	.percentaje {
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
