import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { Container, Inner, Back, Front, Title } from './styled';
import Rated from '../Rated/Rated';
import Image from 'next/image';

const PreviewCard = ({ data, redirect }) => {
	const goTo = () => {
		if (redirect) {
			window.location.href = `/${redirect}/${data.id}`;
		} else if (data.media_type === 'movie') {
			window.location.href = `/movie/${data.id}`;
		} else {
			window.location.href = `/tv/${data.id}`;
		}

		// window.location.href = `/details/${data.id}`;
	};

	return (
		data.media_type !== 'person' && (
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Container onClick={goTo}>
					<Inner>
						<Front>
							<Image
								src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.poster_path}`}
								height={200}
								width={150}
							/>
							<Title>{data.title || data.name}</Title>
							<p style={{ margin: 0 }}>
								{data.release_date || data.first_air_date}
							</p>
							<Rated rated={data.vote_average} />
						</Front>

						<Back>
							<p style={{ margin: 'auto', width: '90%', zIndex: 1000 }}>
								{data.overview}
							</p>
						</Back>
					</Inner>
				</Container>
			</motion.div>
		)
	);
};

/*
    todo: Cambiar el object por un shape y declarar correctamente las propiedades del objeto
*/

PreviewCard.propTypes = {
	data: PropTypes.object,
	redirect: PropTypes.string,
};

export default PreviewCard;
