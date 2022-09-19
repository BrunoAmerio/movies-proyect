import styled from 'styled-components';

export const SeasonContainer = styled.div`
	display: flex;
	gap: 20px;
	overflow-x: auto;
	overflow-y: hidden;
	max-height: 530px;
	height: fit-content;
	scroll-snap-type: x mandatory;
	background: linear-gradient(
		90deg,
		rgba(155, 255, 171) 0%,
		rgba(155, 255, 171) 0.01%,
		rgba(1, 209, 255) 100%
	);
	padding: 10px 0px;
	border-radius: 10px;

	.season {
		width: 250px;
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
	display: flex;
	width: 500px;
	align-items: center;
	gap: 25px;
	text-align: center;
	margin: auto;

	div {
		text-align: left;
	}
	p {
		margin: 0;
	}
`;
