export const validateLogin = (input, setInput) => {
  const number = input.cardNumber.replace(/\D/g, "");
  const pin = input.pin.replace(/\W/g, "");
  const errors = { cardNumber: null, pin: null };
  const expReg = {
    visa: "^4[0-9]{12}(?:[0-9]{3})?$",
    mastercard: "5[1-5][0-9]{14}$",
    pin: "^[0-9]{4}$",
  };

  if (number.length !== 0) {
    if (
      number.length === 16 &&
      (number.match(expReg.visa) || number.match(expReg.mastercard))
    ) {
      errors.cardNumber = "true";
    } else {
      errors.cardNumber = "false";
    }
  } else {
    errors.cardNumber = null;
  }

  if (pin.length !== 0) {
    if (!pin.match(expReg.pin)) {
      errors.pin = "false";
    } else {
      errors.pin = "true";
    }
  } else {
    errors.pin = null;
  }

  return errors;
};

export const formatNumber = (n) => {
  const formatCardNumber = n
    .replace(/\s/g, "")
    // Eliminar las letras
    .replace(/\D/g, "")
    // Ponemos espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, "$1 ")
    // Elimina el ultimo espaciado
    .trim();
  return formatCardNumber;
};

export const formatPIN = (pin) => {
  const formatPin = pin.replace(/\D/g, "");
  // Eliminar las letras
  return formatPin;
};
