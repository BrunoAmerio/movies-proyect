import React from 'react';
import Proptypes from 'prop-types';
import Image from 'next/image';

import { Container, Card } from './styled';

// Crear este componente y crear ReviewContainer
// Terminar la vista de las peliculas y ver en cuanto tiempo lo consigo

const CrewContainer = ({ data }) => {
	if (Object.values(data).length) {
		return (
			<div>
				<h2>Reparto</h2>
				<Container>
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
				</Container>
			</div>
		);
	}
};

CrewContainer.propTypes = {
	data: Proptypes.object.isRequired,
};

export default CrewContainer;
