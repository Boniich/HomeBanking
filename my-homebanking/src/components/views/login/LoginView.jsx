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
import {validateLogin } from "./validate";

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const [isDisable, setIsDisable] = useState(true);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleKeyUp = () => {
    if (input.email.length !== 0 && input.password.length !== 0) {
      setIsDisable(false);
    }
    const error = validateLogin(input, setInput);
    setError(error);
  };

  const handleClickShow = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error.email === "true" && error.password === "true") {
      console.log(input);
    }
  };

  return (
    <LoginViewStyled>
      <div className="formulario">
        <img src={trebol} alt="logo" />
        <HeadingMedium4>Saint Patrick</HeadingMedium4>
        <form action="" onSubmit={handleSubmit}>
          <div className="containerEmail">
            <ParagraphMedium3>Correo Electrónico</ParagraphMedium3>
            <input
              type="email"
              name="email"
              value={input.email}
              maxLength="50"
              className={`inputEmail ${
                error.email === "false" ? "error" : ""
              }`}
              placeholder="Ingesa tu E-mail"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            {error.email === "false" ? (
              <span>El email es incorrecto</span>
            ) : null}
          </div>
          <div className="containerPassword">
            <ParagraphMedium3>Contraseña</ParagraphMedium3>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={input.password}
              maxLength="8"
              className={`inputPassword ${error.password === "false" ? "error" : ""}`}
              placeholder="Ingresa tu contraseña"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            <FontAwesomeIcon
              icon={faEye}
              className="iconEye"
              onClick={handleClickShow}
            />
            {error.password === "false" ? <span>La contraseña es incorrecta</span> : null}
          </div>
          <ParagraphUnderline3>¿Olvidaste tu contraseña?</ParagraphUnderline3>
          {/* cambiar por link */}
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
