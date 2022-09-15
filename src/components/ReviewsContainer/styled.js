import styled from 'styled-components';

export const Container = styled.div`
	height: 350px;
	padding: 20px 0px;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #7c7c7c;
	}

	&::-webkit-scrollbar-thumb {
		background-color: black;
		border-radius: 4px;
	}
`;

export const Review = styled.div`
	background-color: #292929;
	border-radius: 8px;
	color: white;
	padding: 1px 0px 15px 0px;
	margin-bottom: 15px;

	div {
		height: 30px;
		width: 98%;
		margin: auto;
		padding: 0px 20px;
		border-bottom: 2px solid #7c7c7c;
	}

	.content {
		width: 95%;
		margin: auto;
		margin-top: 10px;
	}
`;
