import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

const Rated = ({ rated, style }) => {
	const points = String(rated).slice(0, 3);

	const stroke = points >= 7 ? '#37c537' : points >= 5 ? '#f7b53a' : '#ff2d2d';
	const backgroundStroke =
		points >= 7 ? '#046304' : points >= 5 ? '#d6af65' : '#ac4c4c';

	return (
		<Container className='contenedor' style={style}>
			<div
				className='svg'
				style={{
					width: '36px',
					height: '36px',
				}}
			>
				<svg width={150} height={150}>
					<circle
						r='15'
						cx='18'
						cy='18'
						className='background'
						style={{
							stroke: backgroundStroke,
						}}
					></circle>
					<circle
						r='15'
						cx='18'
						cy='18'
						className='progress'
						id='progress'
						style={{
							stroke,
							strokeDashoffset: `${points !== 10 ? 160 - points * 10 : 0}`,
						}}
					></circle>
				</svg>
			</div>

			<div className='percentaje'>
				<small>
					<strong>{points}</strong>
				</small>
			</div>
		</Container>
	);
};

Rated.propTypes = {
	rated: PropTypes.number,
	style: PropTypes.object,
};

export default Rated;
