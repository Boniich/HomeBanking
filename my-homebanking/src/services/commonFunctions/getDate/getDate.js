const currentDateObj = () => {
	const date = new Date();
	return date;
};

const transformDateObj = date => {
	const dateWithProp = new Date(date);
	return dateWithProp;
};

const findMonth = monthFromDate => {
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
	const month = allMonths.find((e, index) => index === monthFromDate);

	return month;
};

const getfringeHour = hour => {
	let fringeHour = '';
	if (hour >= 0 && hour <= 11) {
		fringeHour = 'am';
	} else {
		fringeHour = 'pm';
	}

	return fringeHour;
};

const addZeroToDate = time => {
	let completTime = ``;
	if (time === 0) {
		completTime = '00';
	} else if (
		time === 1 ||
		time === 2 ||
		time === 3 ||
		time === 4 ||
		time === 5 ||
		time === 6 ||
		time === 7 ||
		time === 8 ||
		time === 9
	) {
		completTime = `0${time}`;
	} else {
		completTime = time;
	}

	return completTime;
};

export const getCurrentDate = () => {
	let date = '';
	const day = currentDateObj().getDate();
	const monthFromDate = currentDateObj().getMonth();
	const month = findMonth(monthFromDate);
	const year = currentDateObj().getFullYear();
	const hour = currentDateObj().getHours();
	const minutes = currentDateObj().getMinutes();

	const completHour = addZeroToDate(hour);
	const completMinutes = addZeroToDate(minutes);

	date = `${day} ${month}. ${year} - ${completHour}:${completMinutes} ${getfringeHour(
		hour
	)}`;
	return date;
};

export const transformDateToHumanDate = date => {
	const days = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miercoles',
		'Jueves',
		'Viernes',
		'Sabado',
	];
	const dateOfToday = currentDateObj().toLocaleDateString();
	const currentDay = currentDateObj().getDate();
	const currentMonth = currentDateObj().getMonth();
	const currentYear = currentDateObj().getFullYear();

	const day = transformDateObj(date).getDate();
	const dayFromDate = transformDateObj(date).getDay();

	const dayTransfered = days.find((e, index) => index === dayFromDate);
	const monthFromDate = transformDateObj(date).getMonth();
	const month = findMonth(monthFromDate);
	const year = transformDateObj(date).getFullYear();
	const hour = transformDateObj(date).getHours();
	const minutes = transformDateObj(date).getMinutes();
	const newDate = transformDateObj(date).toLocaleDateString();
	let result = '';

	const completHour = addZeroToDate(hour);
	const completMinutes = addZeroToDate(minutes);

	const timeDate = `${completHour}:${completMinutes} ${getfringeHour(hour)}`;

	const evaluateDay = lessADay => {
		const conditional =
			currentMonth === monthFromDate &&
			currentYear === year &&
			currentDay - lessADay === day;
		return conditional;
	};

	if (dateOfToday === newDate) {
		result = `Hoy - ${timeDate}`;
	} else if (evaluateDay(1)) {
		result = `Ayer - ${timeDate}`;
	} else if (evaluateDay(2)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(3)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(4)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(5)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(6)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(7)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else if (evaluateDay(8)) {
		result = `${dayTransfered} - ${timeDate}`;
	} else {
		result = `${day} ${month}. ${year} - ${timeDate}`;
	}
	return result;
};
