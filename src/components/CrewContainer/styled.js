import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 30px;
	overflow-x: scroll;
	position: relative;
	scroll-snap-type: x mandatory;
`;

export const Card = styled.div`
	min-width: 150px;
	scroll-snap-align: end;
	margin-bottom: 10px;

	div {
		margin-top: 20px;

		p {
			margin: 0px;
		}
	}
`;
