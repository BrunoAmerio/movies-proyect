import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';

import AppContextProvider from '../context/appContext';

function MyApp({ Component, pageProps }) {
	return (
		<AppContextProvider>
			<Component {...pageProps} />
		</AppContextProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};

export default MyApp;
