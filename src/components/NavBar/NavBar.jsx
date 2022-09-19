import React from 'react';

import Image from 'next/image';
import { InputContainer, Logo, Container } from './styled';
import searchIcon from '../../assets/search_icon.svg';
import logo from '../../assets/logo.svg';

const NavBar = () => {
	const search = e => {
		e.preventDefault();
		const search = document.querySelector('#search');

		if (search.value.length) {
			window.location.href = `/search/${search.value}`;
			search.value = '';
		}
	};

	const goHome = () => {
		window.location.href = '/';
	};

	return (
		<Container style={{}}>
			<Logo onClick={goHome}>
				<Image src={logo} width={300} height={300} objectFit='contain' />
			</Logo>

			<InputContainer>
				<form onSubmit={search}>
					<input
						type='text'
						placeholder='Buscar una pelicula o serie'
						id='search'
					/>

					<button className='searchIcon'>
						<Image
							src={searchIcon}
							width={20}
							height={20}
							objectFit='contain'
						/>
					</button>
				</form>
			</InputContainer>
		</Container>
	);
};

export default NavBar;
