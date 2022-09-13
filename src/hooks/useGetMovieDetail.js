import { useEffect, useState } from 'react';

import { GET_MOVIE_DETAIL } from '../config/queries';

function useGetMovieDetail(id) {
	const [detail, setDetail] = useState({});
	const [crew, setCrew] = useState([]);
	const [review, setReview] = useState([]);
	const [collection, setCollection] = useState({});
	const [similar, setSimilar] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (id) {
			GET_MOVIE_DETAIL(id)
				.then(res => {
					console.log(res);
					setDetail(res.movieDetail || {});
					setCrew(res.movieCrew);
					setReview(res.movieReview);
					setCollection(res.movieCollection || {});
					setSimilar(res.similarMovies);
				})
				.catch(() => setError(true));
		}
	}, [id]);

	return {
		detail,
		crew,
		review,
		collection,
		similar,
		error,
	};
}

export default useGetMovieDetail;
