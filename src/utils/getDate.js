const getDate = date => {
	const x = new Date(date.replace(/-+/g, '/'));
	const dateReady = x.toLocaleDateString('es-MX', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return dateReady;
};

export default getDate;
