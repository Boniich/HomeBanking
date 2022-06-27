export const getDate = () => {
	const newDate = new Date().toLocaleDateString();
	return newDate;
};

export const transformDateToHumanDate = date => {
	const allMonths = [
		'Ene',
		'Feb',
		'Mar',
		'Abr',
		'May',
		'Jun',
		'Jul',
		'Ago',
		'Sep',
		'Oct',
		'Nov',
		'Dic',
	];
	const dateOfToday = getDate();
	const day = new Date(date).getDate();
	const monthFromDate = new Date(date).getMonth();
	const month = allMonths.find((e,index) => index === monthFromDate);
	const year = new Date(date).getFullYear();
	const hour = new Date(date).getHours();
	const minutes = new Date(date).getMinutes();
	const newDate = new Date(date).toLocaleDateString();
	let result = '';
	if (dateOfToday === newDate) {
		result = `Hoy - ${hour}:${minutes} hs`;
	} else {
		result = `${day} ${month} ${year} - ${hour}:${minutes} hs`;
	}
	return result;
};
