import React, { useEffect, useRef, useState } from 'react';
import Proptypes from 'prop-types';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Container, Card } from './styled';

// Crear este componente y crear ReviewContainer
// Terminar la vista de las peliculas y ver en cuanto tiempo lo consigo

const CrewContainer = ({ data }) => {
	const [width, setWidth] = useState(0);
	const carrousel = useRef();

	useEffect(() => {
		setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
	}, []);

	if (Object.values(data).length) {
		return (
			<Container ref={carrousel}>
				<h2>Reparto</h2>
				<motion.div
					className='cardContainer'
					whileTap={{ cursor: 'grabbing' }}
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					dragMomentum={false}
				>
					{data.map(item => {
						return item.known_for_department === 'Acting' ? (
							<Card key={item.id}>
								<Image
									src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${item.profile_path}`}
									width={150}
									height={180}
									objectFit='cover'
								/>

								<div>
									<p>{item.original_name}</p>
									<p>
										{' '}
										<strong>{item.character}</strong>
									</p>
								</div>
							</Card>
						) : null;
					})}
				</motion.div>
			</Container>
		);
	}
};

CrewContainer.propTypes = {
	data: Proptypes.object.isRequired,
};

export default CrewContainer;
