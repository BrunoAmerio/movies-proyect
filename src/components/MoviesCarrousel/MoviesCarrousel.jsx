import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer } from './styled';

import PreviewCard from '../PreviewCard/PreviewCard';

const MoviesCarrousel = ({ title, data }) => {
	console.log(data);

	return (
		<div>
			<h1>{title}</h1>

			<CardContainer>
				{data.map(item => (
					<PreviewCard key={item.id} data={item} />
				))}
			</CardContainer>
		</div>
	);
};

MoviesCarrousel.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
};

export default MoviesCarrousel;
