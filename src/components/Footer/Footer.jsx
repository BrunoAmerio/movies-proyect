import React from 'react';

const Footer = () => {
	return (
		<footer style={{ textAlign: 'center' }}>
			<p>
				Proyecto desarrollado por{' '}
				<a
					href='https://www.linkedin.com/in/bruno-amerio/'
					target='_blank'
					rel='noreferrer'
				>
					Bruno Amerio.{' '}
				</a>
				Puedes ver el repositorio del proyecto{' '}
				<a
					href='https://github.com/BrunoAmerio/movies-proyect'
					target='_blank'
					rel='noreferrer'
				>
					aquí
				</a>
			</p>
		</footer>
	);
};

export default Footer;
