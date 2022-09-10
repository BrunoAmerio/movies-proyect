import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

const Rated = ({ rated }) => {
	const points = String(rated).slice(0, 3);
	const background = {
		backgroundColor:
			points >= 7 ? '#02a002' : points >= 5 ? '#f7b53a' : '#ff2d2d',
	};

	return (
		<Container style={background}>
			<small style={{ margin: 0 }}>
				{points}
				<small>%</small>{' '}
			</small>
		</Container>
	);
};

Rated.propTypes = {
	rated: PropTypes.number,
};

export default Rated;
