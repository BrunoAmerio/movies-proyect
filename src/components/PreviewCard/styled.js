import styled from 'styled-components';

export const Inner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.6s;
	transform-style: preserve-3d;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
	width: 200px;
	min-width: 200px;
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
	color: white;
	transform: rotateY(180deg);
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	overflow: auto;
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
	margin: 15px 0px 0px 0px;
`;
