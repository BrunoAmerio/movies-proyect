import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';

import AppContextProvider from '../context/appContext';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
	return (
		<AppContextProvider>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</AppContextProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};

export default MyApp;
