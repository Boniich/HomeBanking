/**
 * Handle the string and symbol of each currency
 * @param {string} currency
 * @returns {obj}
 */

export const handleCurrency = currency => {
	let CurrencyType = {
		currencyText: '',
		currencySymbol: '',
	};
	switch (currency) {
		case 'USD':
			CurrencyType.currencyText = 'Ahorro dolares';
			CurrencyType.currencySymbol = '$';
			return CurrencyType;
		case 'ARS':
			CurrencyType.currencyText = 'Ahorro pesos Arg';
			CurrencyType.currencySymbol = '$';
			return CurrencyType;

		case 'PEN':
			CurrencyType.currencyText = 'Ahorro Soles';
			CurrencyType.currencySymbol = 'S/';
			return CurrencyType;

		default:
			CurrencyType.currencyText = 'Ahorro';
			CurrencyType.currencySymbol = '$';
			return CurrencyType;
	}
};
