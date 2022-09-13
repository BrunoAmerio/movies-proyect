import styled from 'styled-components';

export const Inner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.4s;
	transform-style: preserve-3d;
`;

export const Container = styled.div`
	width: 180px;
	min-width: 180px;
	height: 280px;
	min-height: 280px;

	scroll-snap-align: end;
	perspective: 1000px;
	margin-bottom: 20px;

	&:hover ${Inner} {
		transform: rotateY(180deg);
	}
`;

export const Front = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
`;

export const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: auto;

	padding: 10px 0px;
	border-radius: 8px;
	background-color: #f8f8f8;
	color: black;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	transform: rotateY(180deg);
	cursor: default;

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		background: #c4c4c4;
	}

	&::-webkit-scrollbar-thumb {
		background-color: black;
	}
`;

export const Title = styled.h4`
	margin: 5px 0px 0px 0px;
`;
