import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
	cursor: grab;

	.cardContainer {
		display: flex;
		gap: 30px;
		width: fit-content;
	}
`;

export const Card = styled.div`
	min-width: 150px;
	width: 150px;
	scroll-snap-align: end;
	margin-bottom: 10px;

	div {
		margin-top: 20px;

		p {
			margin: 0px;
		}
	}
`;
