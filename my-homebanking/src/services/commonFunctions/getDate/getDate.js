export const getDate = () => {
	const newDate = new Date().toLocaleDateString();
	return newDate;
};


const currentDateObj = () =>{
	const date = new Date();
	return date;
}

const transformDateObj = (date) =>{
	const dateWithProp = new Date(date);
	return dateWithProp;
}

export const getCurrentTime = () =>{
	let time = "";
	const hour = currentDateObj().getHours();
	const minutes = currentDateObj().getMinutes();
	time = `${hour}:${minutes} hs`;
	return time;
}

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
	const dateOfToday = currentDateObj().toLocaleDateString();
	const currentDay = currentDateObj().getDate();
	const currentMonth = currentDateObj().getMonth();
	const currentYear = currentDateObj().getFullYear();

	const day = transformDateObj(date).getDate();
	const monthFromDate = transformDateObj(date).getMonth();
	const month = allMonths.find((e,index) => index === monthFromDate);
	const year = transformDateObj(date).getFullYear();
	const hour = transformDateObj(date).getHours();
	const minutes = transformDateObj(date).getMinutes();
	const newDate = transformDateObj(date).toLocaleDateString();
	let result = '';
	if (dateOfToday === newDate) {
		result = `Hoy - ${hour}:${minutes} hs`;
	} else if((currentMonth === monthFromDate) && (currentYear === year) && (currentDay-1 === day)){
		result = `Ayer - ${hour}:${minutes} hs`
	}else {
		result = `${day} ${month}. ${year} - ${hour}:${minutes} hs`;
	}
	return result;
};
