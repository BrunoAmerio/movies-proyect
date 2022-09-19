const getDate = date => {
	const x = new Date(date.replace(/-+/g, '/'));
	const dateReady = x.toLocaleDateString('es-MX', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});

	return dateReady;
};

export default getDate;
