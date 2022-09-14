import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterContainer>
			<p>
				Proyecto desarrollado por{' '}
				<a
					href='https://www.linkedin.com/in/bruno-amerio/'
					target='_blank'
					rel='noreferrer'
					style={{ color: 'palevioletred' }}
				>
					Bruno Amerio.{' '}
				</a>
				Puedes ver el repositorio del proyecto{' '}
				<a
					href='https://github.com/BrunoAmerio/movies-proyect'
					target='_blank'
					rel='noreferrer'
					style={{ color: 'palevioletred' }}
				>
					aquí
				</a>
			</p>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	width: 100%;
	text-align: center;
	margin-top: 100px;
	position: absolute;
	bottom: -50px;
	left: 50%;
	transform: translateX(-50%);
`;

export default Footer;
