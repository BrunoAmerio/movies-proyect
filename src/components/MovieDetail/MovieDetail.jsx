import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { GET_MOVIE_DETAIL } from '../../config/queries';
import getDuration from '../../utils/getDuration';

import {
	MainContainer,
	DataContainer,
	List,
	SideBar,
	CompaniesContainer,
	Section,
	Background,
	CollectionContainer,
} from './styled';
import PreviewCard from '../PreviewCard/PreviewCard';
import Rated from '../Rated/Rated';
import CrewContainer from '../CrewContainer/CrewContainer';
import ReviewContainer from '../ReviewsContainer/ReviewsContainer';
import MoviesCarrousel from '../MoviesCarrousel/MoviesCarrousel';

const MovieDetail = () => {
	const { id } = useRouter().query;

	const [detail, setDetail] = useState({});
	const [crew, setCrew] = useState([]);
	const [review, setReview] = useState([]);
	const [collection, setCollection] = useState({});
	const [similar, setSimilar] = useState([]);

	useEffect(() => {
		if (id) {
			GET_MOVIE_DETAIL(id).then(res => {
				console.log(res);
				setDetail(res.movieDetail || {});
				setCrew(res.movieCrew);
				setReview(res.movieReview);
				setCollection(res.movieCollection || {});
				setSimilar(res.similarMovies);
			});
		}
	}, [id]);

	if (detail && Object.values(detail).length) {
		const duration = getDuration(detail.runtime);

		console.log(collection);

		return (
			<div>
				<MainContainer>
					<Background
						style={{
							backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_LINK}/${detail.backdrop_path})`,
						}}
					>
						<div />
					</Background>
					<Image
						src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${detail.poster_path}`}
						height={400}
						width={250}
						objectFit={'contain'}
					/>

					<DataContainer>
						<div>
							<h1>{detail.title}</h1>
							<p>{detail.tagline}</p>
						</div>

						<List>
							{detail.genres.map(item => (
								<li key={item.id}>{item.name}</li>
							))}
						</List>

						<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
							<Rated rated={detail.vote_average} fixed={true} />
							<p>
								{' '}
								<strong>Votos:</strong> {detail.vote_count}
							</p>
						</div>

						<div>
							<p>
								<strong>Duración:</strong> {duration}hs
							</p>

							<p>{detail.overview}</p>
						</div>
					</DataContainer>
				</MainContainer>

				<Section>
					<div style={{ width: '83%' }}>
						<CrewContainer data={crew} />

						{Object.values(collection).length && (
							<CollectionContainer>
								<Background
									style={{
										backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_LINK}${collection.backdrop_path})`,
									}}
								>
									<div />
								</Background>

								<div className='mainContainer'>
									<h1>{collection.name}</h1>
									<p>{collection.overview}</p>
								</div>

								<div className='cardContainer'>
									{collection.parts.map(item => (
										<PreviewCard key={item.id} data={item} />
									))}
								</div>
							</CollectionContainer>
						)}

						<ReviewContainer reviews={review} />

						<MoviesCarrousel
							title='Peliculas similares'
							data={similar}
							redirect={'movies'}
						/>
					</div>

					<SideBar>
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

						<h2>Compañias</h2>
						<CompaniesContainer>
							{detail.production_companies.map(item => (
								<div key={item.id}>
									{item.logo_path && (
										<Image
											src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${item.logo_path}`}
											height={50}
											width={100}
										/>
									)}
									<p>{item.name}</p>
								</div>
							))}
						</CompaniesContainer>
					</SideBar>
				</Section>

				{/* Debemos tomar la propiedad backdrop_path para mostart la imagen en el fondo */}
			</div>
		);
	}

	return <h1>Loading...</h1>;
};

export default MovieDetail;
