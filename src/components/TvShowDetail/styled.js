import styled from 'styled-components';

export const SeasonContainer = styled.div`
	display: flex;
	gap: 20px;
	overflow-x: auto;
	overflow-y: hidden;
	max-height: 530px;
	height: fit-content;
	scroll-snap-type: x mandatory;

	.season {
		min-width: 250px;
		max-height: 500px;
		overflow-y: auto;
		height: 100%;
		text-align: center;
		scroll-snap-align: center;

		h4,
		p {
			margin: 0;
		}

		&::-webkit-scrollbar {
			width: 5px;
		}

		&::-webkit-scrollbar-track {
			background: #c4c4c4;
		}

		&::-webkit-scrollbar-thumb {
			background-color: black;
		}
	}
`;

export const Episodie = styled.div`
	text-align: center;
	width: 30%;
	min-width: 300px;
	margin: auto;

	p {
		margin: 0;
	}
`;
