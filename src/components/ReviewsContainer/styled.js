import styled from 'styled-components';

export const Container = styled.div`
	height: 300px;
	padding: 20px 0px;
	overflow: auto;
`;

export const Review = styled.div`
	background-color: #f8f8f8;
	border-radius: 8px;
	color: black;
	padding: 10px 0px;
	margin-bottom: 15px;

	div {
		height: 30px;
		width: 98%;
		margin: auto;
		padding: 0px 20px;
		border-bottom: 2px solid black;
	}

	.content {
		width: 95%;
		margin: auto;
		margin-top: 10px;
	}
`;
