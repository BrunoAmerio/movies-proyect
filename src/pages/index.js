import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { GET_ALL_MOVIES } from '../config/queries';

import PreviewCard from '../components/PreviewCard/PreviewCard';

export default function Home() {
	const [array, setArray] = useState([]);

	useEffect(() => {
		GET_ALL_MOVIES().then(res => {
			setArray(res.results);
			console.log(res.results);
		});
	}, []);

	return (
		<div className={styles.container}>
			<h1>¿Aún no sabes que ver?</h1>
			{array.map(item => (
				<PreviewCard key={item.title} data={item} />
			))}
		</div>
	);
}
