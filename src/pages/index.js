import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { GET_ALL_MOVIES } from '../config/queries';

import MoviesCarrousel from '../components/MoviesCarrousel/MoviesCarrousel';
import PreviewCard from '../components/PreviewCard/PreviewCard';

export default function Home() {
	const [mostPopular, setMostPopular] = useState([]);
	const [trending, setTrending] = useState([]);

	useEffect(() => {
		GET_ALL_MOVIES().then(res => {
			setTrending(res.trending);
			setMostPopular(res.mostPopular);
		});
	}, []);

	return (
		<div className={styles.container}>
			<MoviesCarrousel title='Lo más visto esta semana' data={mostPopular} />

			<div>
				{trending.map(item => (
					<PreviewCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
}
