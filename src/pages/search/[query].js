import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { SEARCH } from '../../config/queries';
import PreviewCard from '../../components/PreviewCard/PreviewCard';

const SearchPage = () => {
	const { query } = useRouter().query;
	const [mainArray, setMainArray] = useState(null);

	useEffect(() => {
		if (query) {
			SEARCH(query).then(res => setMainArray(res));
		}
	}, [query]);

	if (mainArray && mainArray.length) {
		return (
			<div style={{ marginTop: 40 }}>
				<MoviesContainer>
					{mainArray.map(item => (
						<PreviewCard key={item.id} data={item} />
					))}
				</MoviesContainer>
			</div>
		);
	}

	if (mainArray && !mainArray.length) {
		return (
			<div>
				<h3 style={{ textAlign: 'center' }}>
					No encontramos nada que coincida con tu consulta
				</h3>
			</div>
		);
	}

	return <h1>Loading...</h1>;
};

const MoviesContainer = styled.div`
	display: grid;
	grid-column-gap: 30px;
	grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
`;

export default SearchPage;
