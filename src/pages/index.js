import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/appContext';

// Components
import MoviesCarrousel from '../components/MoviesCarrousel/MoviesCarrousel';
import PreviewCard from '../components/PreviewCard/PreviewCard';

import styles from '../styles/Home.module.css';

export default function Home() {
	const { mainArray, mostPopularMovies, mostPopularTvshow } = useAppContext();

	const search = e => {
		e.preventDefault();
		const search = document.querySelector('#search').value;
		window.location.href = `/search/${search}`;
	};

	if (mainArray.length && mostPopularMovies.length) {
		return (
			<div className={styles.container}>
				<InputContainer>
					<form onSubmit={search}>
						<input
							type='text'
							placeholder='Busque peliculas o series!'
							id='search'
						/>
					</form>
				</InputContainer>

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

const InputContainer = styled.div`
	width: 50%;
	margin: auto;

	input {
		border: none;
		border-radius: 8px;
		height: 30px;
		width: 100%;
		padding: 0px 10px;

		&:focus {
			outline: none;
		}
	}
`;
