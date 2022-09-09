import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { GET_MOVIE_DETAIL } from '../../config/queries';
import getDuration from '../../utils/getDuration';

const MovieDetail = () => {
	const { id } = useRouter().query;

	const [detail, setDetail] = useState({});
	const [crew, setCrew] = useState([]);
	const [review, setReview] = useState([]);
	const [collection, setCollection] = useState({});
	const [recommended, setRecommended] = useState({});

	useEffect(() => {
		if (id) {
			GET_MOVIE_DETAIL(id).then(res => {
				console.log(res);
				setDetail(res.movieDetail);
				setCrew(res.movieCrew);
				setReview(res.movieReview);
				setCollection(res.movieCollection);
				setRecommended(res.recommendedMovies);
			});
		}
	}, [id]);

	if (Object.values(detail).length) {
		const duration = getDuration(detail.runtime);

		return (
			<div>
				<div>
					<Image
						src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${detail.poster_path}`}
						height={450}
						width={300}
					/>
					<h1>{detail.title}</h1>
					<h4>{detail.tagline}</h4>

					{detail.homepage ? (
						<a href={detail.homepage} rel='noreferrer' target='_blank'>
							{detail.homepage}
						</a>
					) : null}

					<p>Duración: {duration}hs</p>

					<div>
						<h2>Generos: </h2>
						<ul>
							{detail.genres.map(item => (
								<li key={item.id}>{item.name}</li>
							))}
						</ul>
					</div>

					<div>
						<p>Media de votos: {detail.vote_average}</p>
						<p>Cantidad de votos: {detail.vote_count}</p>
					</div>
				</div>

				<div>
					{crew.map(item => (
						<div key={item.id}>
							<Image
								src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${item.profile_path}`}
								width={80}
								height={90}
							/>

							<p>{item.original_name}</p>
							<p>Rol: {item.known_for_department}</p>
							<p>Personaje: {item.character}</p>
						</div>
					))}
				</div>

				<p>{detail.overview}</p>

				<p>
					Presupuesto:{' '}
					{detail.budget > 0
						? detail.budget.toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
								minimumFractionDigits: 0,
						  })
						: ' -'}
				</p>

				<p>
					Ganancias:{' '}
					{detail.revenue > 0
						? detail.revenue.toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
								minimumFractionDigits: 0,
						  })
						: ' -'}
				</p>

				<div>
					<h2>Productoras</h2>
					{detail.production_companies.map(item => (
						<div key={item.id}>
							{item.logo_path && (
								<Image
									src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${item.logo_path}`}
									height={20}
									width={120}
								/>
							)}
							<p>{item.name}</p>
						</div>
					))}
				</div>

				{/* Debemos tomar la propiedad backdrop_path para mostart la imagen en el fondo */}

				{Object.values(collection).length && (
					<div>
						<h1>{collection.name}</h1>
						<p>{collection.overview}</p>

						<div>
							{collection.parts.map(item => (
								<p key={item.id}>
									Aquí debemos colocar el componente PreviewCard
								</p>
							))}
						</div>
					</div>
				)}

				<div>
					<h2>¿Que opina la gente?</h2>
					<div>
						{review.map(item => (
							<div key={item.id}>
								<div>
									<p>
										<strong> {item.author}</strong>
									</p>
								</div>
								<p>{item.content}</p>
							</div>
						))}
					</div>
				</div>

				<div>
					<h2>Recomendaciónes:</h2>
					{recommended.map(item => (
						<p key={item.id}>
							Aqui deberíamos tener una lista de peliculas recomendas
						</p>
					))}
				</div>
			</div>
		);
	}

	return <h1>Loading...</h1>;
};

export default MovieDetail;
