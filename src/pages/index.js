import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/appContext';

// Components
import MoviesCarrousel from '../components/MoviesCarrousel/MoviesCarrousel';
import PreviewCard from '../components/PreviewCard/PreviewCard';
import Image from 'next/image';

import resting1 from '../assets/resting1.svg';

export default function Home() {
	const { mainArray, mostPopularMovies, mostPopularTvshow } = useAppContext();

	if (mainArray.length && mostPopularMovies.length) {
		return (
			<Container>
				<div className='presentation'>
					<h1>¡¡Bienvenido/a!!</h1>
					<h3>
						¿No sabes que ver?... <br />
						Aquí te econtrarás con millones de películas y programas de
						televisión por descubrir. <br />
						¡Explorá ahora!
					</h3>

					<div className='image'>
						<Image src={resting1} />
					</div>
				</div>

				<div>
					<MoviesCarrousel
						title='Peliculas más vistas esta semana'
						data={mostPopularMovies}
						redirect={'movie'}
					/>
				</div>

				<div style={{ marginTop: 50 }}>
					<MoviesCarrousel
						title='Series más vistas esta semana'
						data={mostPopularTvshow}
						redirect={'tv'}
					/>
				</div>

				<div style={{ marginTop: 50 }}>
					<h2 style={{ marginBottom: 0 }}>¿Aún no sabes que ver?</h2>
					<p style={{ marginTop: 0 }}>Te recomendamos lo siguiente:</p>

					<MoviesContainer>
						{mainArray.map(item => (
							<PreviewCard key={item.id} data={item} />
						))}
					</MoviesContainer>
				</div>
			</Container>
		);
	}
	return <h1>Loading...</h1>;
}

const MoviesContainer = styled.div`
	display: grid;
	grid-column-gap: 30px;
	row-gap: 30px;
	grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
`;

const Container = styled.div`
	padding: 0 2rem;

	.presentation {
		position: relative;
		width: 100%;
		background: linear-gradient(270deg, #2461fd 0%, #00c2ff 100%);
		padding: 10px 10px 10px 50px;
		border-radius: 0px 0px 8px 8px;
		text-align: center;

		h1,
		h3 {
			margin: 0;
			color: white;
			z-index: 100;
		}
	}
`;
