import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer } from './styled';

import PreviewCard from '../PreviewCard/PreviewCard';

const MoviesCarrousel = ({ title, data, redirect }) => {
	if (data.length) {
		return (
			<div>
				<h2>{title}</h2>

				<CardContainer>
					{data.map(item => (
						<PreviewCard key={item.id} data={item} redirect={redirect} />
					))}
				</CardContainer>
			</div>
		);
	}

	return null;
};

MoviesCarrousel.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	redirect: PropTypes.string,
};

export default MoviesCarrousel;
