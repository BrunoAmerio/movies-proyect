import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	overflow: hidden;

	.cardContainer {
		display: flex;
		width: fit-content;
		align-items: center;
		gap: 35px;
		padding: 10px 0px;
		border-radius: 10px;
		cursor: grab;
	}

	.background {
		position: absolute;
		width: 100%;
		height: 80%;
		border-radius: 10px;
		z-index: -1;
	}
`;
