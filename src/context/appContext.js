import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import { GET_ALL, SEARCH } from '../config/queries';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [search, setSearch] = useState('');
	const [mainArray, setMainArray] = useState([]);
	const [mostPopularMovies, setMostPopularMovies] = useState([]);
	const [mostPopularTvshow, setMostPopularTvshow] = useState([]);

	useEffect(() => {
		if (!search.length) {
			GET_ALL().then(res => {
				setMainArray(res.trending);
				setMostPopularMovies(res.mostPopularMovies);
				setMostPopularTvshow(res.mostPopularTvshow);
			});
		}
	}, []);

	useEffect(() => {
		if (search) {
			SEARCH(search).then(res => {
				console.log('Esta es la respuesta del search', res);
				setMainArray(res);
			});
		}
	}, [search]);

	const values = useMemo(
		() => ({
			search,
			setSearch,
			mainArray,
			mostPopularMovies,
			mostPopularTvshow,
		}),
		[search, mainArray, mostPopularMovies, mostPopularTvshow]
	);

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.func,
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppContextProvider;
