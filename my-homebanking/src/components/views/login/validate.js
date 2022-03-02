export const validateLogin = (input, setInput) => {
  const number = input.email;
  const password = input.password;
  const errors = { email: null, pin: null };
  const expReg = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: "^[0-9]{8}$",
  };

  if (number.length !== 0) {
    if (number.match(expReg.email)) {
      errors.email = "true";
    } else {
      errors.email = "false";
    }
  } else {
    errors.email = null;
  }

  if (password.length !== 0) {
    if (!password.match(expReg.password)) {
      errors.password = "false";
    } else {
      errors.password = "true";
    }
  } else {
    errors.password = null;
  }

  return errors;
};
