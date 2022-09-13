import React from 'react';

import { InputContainer, Logo } from './styled';

const NavBar = () => {
	const search = e => {
		e.preventDefault();
		const search = document.querySelector('#search').value;
		window.location.href = `/search/${search}`;
	};

	const goHome = () => {
		window.location.href = '/';
	};

	return (
		<div style={{ height: 50, marginBottom: 20 }}>
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
				</form>
			</InputContainer>
		</div>
	);
};

export default NavBar;
