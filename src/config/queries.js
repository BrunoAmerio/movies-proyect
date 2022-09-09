import axios from 'axios';

export const GET_ALL_MOVIES = async () => {
	return await axios
		.get(
			`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
		)
		.then(res => res.data);
};

export const GET_MOVIE_DETAIL = async id => {
	const movieDetail = await axios
		.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
		)
		.then(res => res.data)
		.catch(err => console.error(err));

	const movieCrew = await axios
		.get(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES
	`
		)
		.then(res => res.data.cast.slice(0, 15))
		.catch(err => console.error(err));

	const movieReview = await axios
		.get(
			`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1
	`
		)
		.then(res => res.data.results.slice(0, 15))
		.catch(err => console.error(err));

	const movieCollection =
		movieDetail?.belongs_to_collection &&
		(await axios
			.get(
				`https://api.themoviedb.org/3/collection/${movieDetail.belongs_to_collection.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES`
			)
			.then(res => res.data)
			.catch(err => console.error(err)));

	const recommendedMovies = await axios
		.get(
			`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES&page=1`
		)
		.then(res => res.data.results)
		.catch(err => console.error(err));

	return {
		movieDetail,
		movieCrew,
		movieReview,
		movieCollection,
		recommendedMovies,
	};
};

export const GET_TVSHOW_DETAIL = async id => {
	const tvDetail = await axios
		.get(
			`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES `
		)
		.then(res => res.data);

	const tvCrew = await axios
		.get(
			`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=es-ES
	`
		)
		.then(res => res.data);

	const tvReview = await axios
		.get(
			`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1
	`
		)
		.then(res => res.data);

	return {
		tvDetail,
		tvCrew,
		tvReview,
	};
};
