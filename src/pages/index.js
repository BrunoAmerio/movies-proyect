import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/appContext';

// Components
import MoviesCarrousel from '../components/MoviesCarrousel/MoviesCarrousel';
import PreviewCard from '../components/PreviewCard/PreviewCard';

import styles from '../styles/Home.module.css';

export default function Home() {
	const { mainArray, mostPopularMovies, mostPopularTvshow } = useAppContext();

	if (mainArray.length && mostPopularMovies.length) {
		return (
			<div className={styles.container}>
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
			</div>
		);
	}
	return <h1>Loading...</h1>;
}

const MoviesContainer = styled.div`
	display: grid;
	grid-column-gap: 30px;
	grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
`;
