import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	gap: 3vw;
	align-items: center;
	position: relative;
`;

export const Background = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
	opacity: 0.4;

	background-color: red;
	background-repeat: no-repeat;
	background-position: center right;
	background-size: 100% 100%;

	div {
		width: 100%;
		height: 100%;
		background-color: #4083ff;
		opacity: 0.4;
	}
`;

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const List = styled.ul`
	display: flex;
	gap: 30px;
	list-style: none;
	font-weight: bolder;
	padding: 0px;

	li {
		background-color: re;
	}
`;

export const Section = styled.section`
	display: flex;
	position: relative;
	width: 100%;
`;

export const SideBar = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0px;
	text-align: center;
	grid-column: 2;
	padding-top: 40px;
	margin: 0px auto;
	align-items: center;

	p {
		margin: 0px;
		margin-bottom: 10px;
	}
`;

export const CompaniesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export const CollectionContainer = styled.div`
	position: relative;
	border-radius: 10px;
	text-align: center;
	margin: 10vh 0px;
	background-size: cover;

	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: blue;
		opacity: 0.3;
	}

	.mainContainer {
		z-index: 100;
		padding: 0px 10px;
		margin-bottom: 50px;
	}

	.cardContainer {
		display: flex;
		justify-content: space-around;
		width: 100%;
		overflow: auto;
	}
`;
