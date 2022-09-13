import { useState, useEffect } from 'react';
import { GET_TVSHOW_DETAIL } from '../config/queries';

function useGetTvDetail(id) {
	const [detail, setDetail] = useState({});
	const [crew, setCrew] = useState([]);
	const [review, setReview] = useState([]);
	const [similar, setSimilar] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (id) {
			GET_TVSHOW_DETAIL(id)
				.then(res => {
					console.log(res);
					setDetail(res.tvDetail);
					setCrew(res.tvCrew);
					setReview(res.tvReview);
					setSimilar(res.similarTvShow);
				})
				.catch(() => setError(true));
		}
	}, [id]);

	return {
		detail,
		crew,
		review,
		similar,
		error,
	};
}

export default useGetTvDetail;
