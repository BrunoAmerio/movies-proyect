const getDuration = minute => {
	let minutes = minute;
	let hours = 0;

	while (minutes > 60) {
		hours++;
		minutes -= 60;
	}

	return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export default getDuration;
