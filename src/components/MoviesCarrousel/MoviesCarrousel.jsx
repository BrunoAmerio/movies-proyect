import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Container } from './styled';

import PreviewCard from '../PreviewCard/PreviewCard';

const MoviesCarrousel = ({ title, data, redirect }) => {
	const [width, setWidth] = useState(0);
	const carrousel = useRef();

	useEffect(() => {
		setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
	}, []);

	if (data.length) {
		return (
			<Container ref={carrousel}>
				<h2 style={{ textDecoration: 'underline' }}>{title}</h2>

				<div className='background' />

				<motion.div
					whileTap={{ cursor: 'grabbing' }}
					className='cardContainer'
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					dragMomentum={false}
				>
					{data.map(item => (
						<PreviewCard key={item.id} data={item} redirect={redirect} />
					))}
				</motion.div>
			</Container>
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
