import React from 'react';

import Image from 'next/image';
import { InputContainer, Logo, Container } from './styled';
import searchIcon from '../../assets/search_icon.svg';

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
			{/* <div className='title'>
				<h1>¡¡Bienvenidos!!</h1>
				<h3>
					¿No sabes que ver?... Millones de películas y programas de televisión
					por descubrir. <br />
					¡Explora ahora!
				</h3>
			</div> */}

			<Logo onClick={goHome}>
				<p>Logo</p>
			</Logo>

			<InputContainer>
				<form onSubmit={search}>
					<input
						type='text'
						placeholder='Busque peliculas o series!'
						id='search'
					/>

					<button className='searchIcon'>
						<Image
							src={searchIcon}
							width={30}
							height={30}
							objectFit='contain'
						/>
					</button>
				</form>
			</InputContainer>
		</Container>
	);
};

export default NavBar;
