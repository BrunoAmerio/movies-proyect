import axios from 'axios';

const APIKEY = process.env.NEXT_PUBLIC_API_KEY;

export const GET_ALL = async () => {
	const mostPopularMovies = await axios
		.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=es-ES&page=1`
		)
		.then(res => res.data.results)
		.catch(err => console.error(err));

	const trending = await axios
		.get(
			`https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}&page=1&language=es-ES`
		)
		.then(res => res.data.results)
		.catch(err => console.error(err));

	const mostPopularTvshow = await axios
		.get(
			`https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=es-ES&page=1`
		)
		.then(res => res.data.results)
		.catch(err => console.error(err));

	return {
		mostPopularMovies,
		trending,
		mostPopularTvshow,
	};
};

export const SEARCH = async query => {
	const result = await axios
		.get(
			`https://api.themoviedb.org/3/search/multi?api_key=${APIKEY}&language=es-ES&query=${query}&page=1&include_adult=true`
		)
		.then(res => res.data.results)
		.catch(err => console.error(err));

	return result;
};

export const GET_MOVIE_DETAIL = async id => {
	const movieDetail = await axios
		.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=es-ES`
		)
		.then(res => res.data)
		.catch(err => console.error(err));

	const movieCrew = await axios
		.get(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=es-ES
	`
		)
		.then(res => res.data.cast.slice(0, 15))
		.catch(err => console.error(err));

	const movieReview = await axios
		.get(
			`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1
	`
		)
		.then(res => res.data.results.slice(0, 15))
		.catch(err => console.error(err));

	const movieCollection =
		movieDetail?.belongs_to_collection &&
		(await axios
			.get(
				`https://api.themoviedb.org/3/collection/${movieDetail.belongs_to_collection.id}?api_key=${APIKEY}&language=es-ES`
			)
			.then(res => res.data)
			.catch(err => console.error(err)));

	const similarMovies = await axios
		.get(
			`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${APIKEY}&language=es-ES&page=1`
		)
		.then(res => res.data.results)
		.catch(err => console.error(err));

	return {
		movieDetail,
		movieCrew,
		movieReview,
		movieCollection,
		similarMovies,
	};
};

export const GET_TVSHOW_DETAIL = async id => {
	const tvDetail = await axios
		.get(
			`https://api.themoviedb.org/3/tv/${id}?api_key=${APIKEY}&language=es-ES `
		)
		.then(res => res.data);

	const tvCrew = await axios
		.get(
			`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${APIKEY}&language=es-ES
	`
		)
		.then(res => res.data);

	const tvReview = await axios
		.get(
			`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1
	`
		)
		.then(res => res.data);

	return {
		tvDetail,
		tvCrew,
		tvReview,
	};
};
