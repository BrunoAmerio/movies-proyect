import { useRouter } from 'next/router';
import React from 'react';

import useGetTvDetail from '../../hooks/useGetTvDetail';
import getDuration from '../../utils/getDuration';
import getDate from '../../utils/getDate';

import {
	MainContainer,
	Background,
	DataContainer,
	List,
	Section,
	SideBar,
	CompaniesContainer,
} from '../MovieDetail/styled';
import { SeasonContainer, Episodie } from './styled';

// Components
import Image from 'next/image';
import Rated from '../Rated/Rated';
import CrewContainer from '../CrewContainer/CrewContainer';
import ReviewContainer from '../ReviewsContainer/ReviewsContainer';
import MoviesCarrousel from '../MoviesCarrousel/MoviesCarrousel';

const TvShowDetail = () => {
	const { id } = useRouter().query;

	const { crew, detail, review, similar, error } = useGetTvDetail(id);

	if (error) {
		return <h1>Algo salió mal, por favor recargue la página</h1>;
	}

	if (Object.values(detail).length) {
		return (
			<div style={{ marginTop: 40 }}>
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
							height={350}
							width={230}
							style={{ borderRadius: 10 }}
						/>

						<DataContainer>
							<div>
								<h1>{detail.name}</h1>
								<p>{detail.tagline}</p>
							</div>

							<List>
								{detail.genres.map(item => (
									<li key={item.id}>{item.name}</li>
								))}
							</List>

							<div
								className='vote'
								style={{ display: 'flex', alignItems: 'center', gap: 10 }}
							>
								<Rated rated={detail.vote_average} fixed={true} />
								<p>
									{' '}
									<strong>Votos:</strong> {detail.vote_count}
								</p>
							</div>

							<p className='overview'>{detail.overview}</p>

							<h4 style={{ margin: 0 }}>Creado por:</h4>
							<div style={{ display: 'flex', gap: 20 }}>
								{detail.created_by.map(item => (
									<p key={item.id} style={{ margin: 0 }}>
										{item.name}
									</p>
								))}
							</div>
						</DataContainer>
					</div>
				</MainContainer>

				<Section>
					<div className='mainContainer'>
						<CrewContainer data={crew} />

						<h2 style={{ textAlign: 'center' }}> Ultimo episodio </h2>
						<Episodie>
							<Image
								src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${detail.last_episode_to_air.still_path}`}
								width={300}
								height={250}
								objectFit=''
								style={{ borderRadius: 10 }}
							/>
							<div>
								<h3>{detail.last_episode_to_air.name}</h3>
								<p>
									<strong>Emitido:</strong>{' '}
									{getDate(detail.last_episode_to_air.air_date)}
								</p>
								<p>
									{' '}
									<strong>Temporada:</strong>{' '}
									{detail.last_episode_to_air.season_number}
								</p>
								<p>
									<strong>Episodio:</strong>{' '}
									{detail.last_episode_to_air.episode_number}
								</p>

								<p>
									<strong>Duracion:</strong>{' '}
									{getDuration(detail.last_episode_to_air.runtime)}hs
								</p>

								<p>{detail.last_episode_to_air.overview}</p>
							</div>
						</Episodie>

						<h2>Temporadas</h2>
						<SeasonContainer>
							{detail.seasons.map(item => (
								<div key={item.id} className='season'>
									<Image
										src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}${item.poster_path}`}
										width={200}
										height={300}
									/>
									<h4>{item.name}</h4>
									<p style={{ marginBottom: 10 }}>
										Episodios: {item.episode_count}
									</p>
									<p>{item.overview}</p>
								</div>
							))}
						</SeasonContainer>

						{review.length ? <ReviewContainer reviews={review} /> : null}

						<MoviesCarrousel
							data={similar}
							title='Series similares'
							redirect={'tv'}
						/>
					</div>

					<SideBar>
						<p>
							<strong> Status:</strong> {detail.status}
						</p>

						<p>
							<strong>Emitido:</strong> {getDate(detail.first_air_date)}
						</p>

						<h2>Compañías</h2>
						<CompaniesContainer>
							{detail.production_companies.map(item => (
								<div key={item.id}>
									{item.logo_path ? (
										<Image
											src={`${process.env.NEXT_PUBLIC_IMAGE_LINK}/${item.logo_path}`}
											height={50}
											width={100}
											objectFit='contain'
										/>
									) : null}
									<p>{item.name}</p>
								</div>
							))}
						</CompaniesContainer>
					</SideBar>
				</Section>
			</div>
		);
	}

	return <h1>Loading...</h1>;
};

export default TvShowDetail;
