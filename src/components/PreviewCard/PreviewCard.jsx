import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const PreviewCard = ({ data }) => {
	const redirect = () => {
		if (data.media_type === 'movie') {
			window.location.href = `/movie/${data.id}`;
		} else {
			window.location.href = `/tv/${data.id}`;
		}
	};

	return (
		<div onClick={redirect}>
			<Image
				src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${data.poster_path}`}
				height={300}
				width={200}
			/>
			<h4>{data.title || data.name}</h4>
			<p>Fecha de lanzamiento: {data.release_date}</p>
			<p>Votos recibidos: {data.vote_count}</p>
			<p>Media de votos: {Math.floor(data.vote_average)}</p>
			<p>{data.overview}</p>
		</div>
	);
};

/*
    todo: Cambiar el object por un shape y declarar correctamente las propiedades del objeto
*/

PreviewCard.propTypes = {
	data: PropTypes.object,
};

export default PreviewCard;
