import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import useGetMovieDetail from '../../hooks/useGetMovieDetail';
import getDuration from '../../utils/getDuration';
import getDate from '../../utils/getDate';

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

	const { collection, crew, detail, review, similar, error } =
		useGetMovieDetail(id);

	console.log(review);

	if (error) {
		return <h1>Algo salió mal, por favor recargue la página</h1>;
	}

	if (detail && Object.values(detail).length) {
		const duration = getDuration(detail.runtime);

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

					<div className='dataContainer'>
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
					</div>
				</MainContainer>

				<Section>
					<div style={{ width: '80%' }}>
						<CrewContainer data={crew} />

						{Object.values(collection).length ? (
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
										<PreviewCard key={item.id} data={item} redirect={'movie'} />
									))}
								</div>
							</CollectionContainer>
						) : null}

						<ReviewContainer reviews={review} />

						<MoviesCarrousel
							title='Peliculas similares'
							data={similar}
							redirect={'movie'}
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

						<p
							style={{
								color: detail.revenue > detail.budget ? 'green' : 'red',
							}}
						>
							Ganancias:{' '}
							{detail.revenue > 0
								? detail.revenue.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
										minimumFractionDigits: 0,
								  })
								: ' -'}
						</p>

						<p>
							{' '}
							<strong>Estreno:</strong> {getDate(detail.release_date)}
						</p>

						<h2>Compañias</h2>
						<CompaniesContainer>
							{detail.production_companies.map(item => (
								<div key={item.id}>
									{item.logo_path ? (
										<Image
											src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${item.logo_path}`}
											height={50}
											width={0}
											objectFit='contain'
										/>
									) : null}
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
