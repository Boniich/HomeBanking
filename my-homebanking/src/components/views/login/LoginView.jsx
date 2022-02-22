import React, { useEffect, useState } from "react";
import { LoginViewStyled } from "./styles";
import trebol from "../../../assets/trebol.png";
import { HeadingMedium4 } from "../../../theme/heading/heading";
import {
  ParagraphMedium3,
  ParagraphUnderline3,
} from "../../../theme/paragraph/paragraph";
import { Button } from "../../../theme/buttons/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { formatNumber, formatPIN, validateLogin } from "./validate";

const LoginView = () => {
  const [showPin, setShowPin] = useState(false);
  const [input, setInput] = useState({
    cardNumber: "",
    pin: "",
  });
  const [error, setError] = useState({});

  const [isDisable, setIsDisable] = useState(true);

  const handleChange = (e) => {
    if (e.target.name === "cardNumber") {
      setInput({
        ...input,
        [e.target.name]: formatNumber(e.target.value),
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: formatPIN(e.target.value),
      });
    }
  };

  const handleKeyUp = () => {
    if (input.cardNumber.length !== 0 && input.pin.length !== 0) {
      setIsDisable(false);
    }
    const error = validateLogin(input, setInput);
    setError(error);
  };

  const handleClickShow = () => {
    setShowPin(!showPin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error.cardNumber === "true" && error.pin === "true") {
      console.log(input);
    }
  };

  return (
    <LoginViewStyled>
      <div className="formulario">
        <img src={trebol} alt="logo" />
        <HeadingMedium4>Saint Patrick</HeadingMedium4>
        <form action="" onSubmit={handleSubmit}>
          <div className="containerCardNumber">
            <ParagraphMedium3>Número de tarjeta</ParagraphMedium3>
            <input
              type="text"
              name="cardNumber"
              value={input.cardNumber}
              maxLength="19"
              className={`inputCardNumber ${
                error.cardNumber === "false" ? "error" : ""
              }`}
              placeholder="Ingresa tu número de tarjeta"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            {error.cardNumber === "false" ? (
              <span>El número de tarjeta no existe</span>
            ) : null}
          </div>
          <div className="containerPin">
            <ParagraphMedium3>PIN</ParagraphMedium3>
            <input
              type={showPin ? "text" : "password"}
              name="pin"
              value={input.pin}
              maxLength="4"
              className={`inputPin ${error.pin === "false" ? "error" : ""}`}
              placeholder="Ingresa tu contraseña"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            <FontAwesomeIcon
              icon={faEye}
              className="iconEye"
              onClick={handleClickShow}
            />
            {error.pin === "false" ? <span>El PIN es incorrecto</span> : null}
          </div>
          <ParagraphUnderline3>¿Olvidaste tu contraseña?</ParagraphUnderline3>
          {/* cambiarlo por link */}
          <Button
            className={`${isDisable === true ? "disable" : ""}`}
            type="submit"
            disabled={isDisable}
          >
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </LoginViewStyled>
  );
};

export default LoginView;
