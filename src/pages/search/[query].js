import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { SEARCH } from '../../config/queries';
import PreviewCard from '../../components/PreviewCard/PreviewCard';

const SearchPage = () => {
	const { query } = useRouter().query;
	const [mainArray, setMainArray] = useState([]);

	useEffect(() => {
		if (query) {
			SEARCH(query).then(res => setMainArray(res));
		}
	}, [query]);

	if (mainArray.length) {
		return (
			<div>
				<MoviesContainer>
					{mainArray.map(item => (
						<PreviewCard key={item.id} data={item} />
					))}
				</MoviesContainer>
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
