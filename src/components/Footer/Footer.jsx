import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterContainer>
			<div>
				<p style={{ margin: 0 }}>
					Desarrollado por{' '}
					<Link
						href='https://www.linkedin.com/in/bruno-amerio/'
						target='_blank'
						rel='noreferrer'
					>
						Bruno Amerio
					</Link>
				</p>

				<p style={{ margin: 0 }}>
					Puedes ver el repositorio del proyecto{' '}
					<Link
						href='https://github.com/BrunoAmerio/movies-proyect'
						target='_blank'
						rel='noreferrer'
					>
						aquí
					</Link>
				</p>
			</div>

			<div>
				<p style={{ margin: 0 }}>
					La información obtenida proviene de{' '}
					<Link
						href='https://developers.themoviedb.org/4/getting-started/authorization'
						target='_blank'
						rel='noreferrer'
					>
						The MovieDB
					</Link>
				</p>
			</div>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: linear-gradient(270deg, #2461fd 0%, #00c2ff 100%);
	border-radius: 8px 8px 0px 0px;
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: -200px;
	padding: 30px 0px;
	left: 50%;
	transform: translateX(-50%);
	font-weight: bolder;
	color: white;
`;

const Link = styled.a`
	text-decoration: underline;

	&:hover {
		color: black;
	}
`;

export default Footer;
