import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import PropTypes from 'prop-types';

import { GET_ALL } from '../config/queries';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [mainArray, setMainArray] = useState([]);
	const [mostPopularMovies, setMostPopularMovies] = useState([]);
	const [mostPopularTvshow, setMostPopularTvshow] = useState([]);

	useEffect(() => {
		if (!mainArray.length) {
			GET_ALL().then(res => {
				setMainArray(res.trending);
				setMostPopularMovies(res.mostPopularMovies);
				setMostPopularTvshow(res.mostPopularTvshow);
			});
		}
	}, []);

	const values = useMemo(
		() => ({
			mainArray,
			mostPopularMovies,
			mostPopularTvshow,
		}),
		[mainArray, mostPopularMovies, mostPopularTvshow]
	);

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.object,
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export default AppContextProvider;
