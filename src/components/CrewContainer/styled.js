import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 30px;
	overflow-x: auto;
	position: relative;
	scroll-snap-type: x mandatory;
	width: fit-content;
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
