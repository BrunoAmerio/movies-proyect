import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GET_ALL } from '../config/queries';

// Components
import MoviesCarrousel from '../components/MoviesCarrousel/MoviesCarrousel';
import PreviewCard from '../components/PreviewCard/PreviewCard';

import styles from '../styles/Home.module.css';
export default function Home() {
	const [trending, setTrending] = useState([]);
	const [mostPopularMovies, setMostPopularMovies] = useState([]);
	const [mostPopularTvshow, setMostPopularTvshow] = useState([]);

	useEffect(() => {
		GET_ALL().then(res => {
			setTrending(res.trending);
			setMostPopularMovies(res.mostPopularMovies);
			setMostPopularTvshow(res.mostPopularTvshow);
		});
	}, []);

	console.log(mostPopularMovies);

	if (trending.length && mostPopularMovies.length) {
		return (
			<div className={styles.container}>
				<div>
					<input type='text' placeholder='Busque peliculas o series!' />
				</div>

				<MoviesCarrousel
					title='Peliculas más vistas esta semana'
					data={mostPopularMovies}
					redirect={'movie'}
				/>
				<MoviesCarrousel
					title='Series más vistas esta semana'
					data={mostPopularTvshow}
					redirect={'tv'}
				/>

				<div>
					<h2>Recomendados</h2>

					<MoviesContainer>
						{trending.map(item => (
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
