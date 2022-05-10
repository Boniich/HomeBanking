import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  EmailContainer,
  IconEye,
  Img,
  Input,
  InputIconContainer,
  LoginSection,
  PasswordContainer,
  ShowLoginErros,
} from "./styles";
import trebol from "../../../assets/trebol.png";
import { HeadingMedium4 } from "../../../theme/heading/heading";
import {
  ParagraphMedium3,
  ParagraphUnderline3,
} from "../../../theme/paragraph/paragraph";
import { Button } from "../../../theme/buttons/buttons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const LoginView = () => {
  const [emailError, setEmailError] = useState({
    emailErrorMsg: "",
    handleEmailError: false,
  });
  const [passwordError, setPasswordError] = useState({
    passwordErrorMsg: "",
    handlePasswordError: false,
  });
  const [isDisable, setIsDisable] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  let url = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_AUTH_ENDPOINT}`;
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyUp = () => {
    // Muestra y oculta el ojo
    console.log("keyUp");
    if (input.password.length !== 0) {
      setShowEye(true);
    } else {
      setShowEye(false);
    }

    if (input.email.length !== 0 && input.password.length !== 0) {
      setIsDisable(false);
    }
  };

  const handleClickShow = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError({ handleEmailError: false });
    try {
      const response = await axios.post(url, {
        email: input.email,
        password: input.password,
      });
      console.log(from);
      navigate(from, { replace: true });
      console.log(response);
    } catch (err) {
      console.log("error", err);
      if (err?.response.status === 404) {
        setEmailError({
          emailErrorMsg: "Email no encontrado",
          handleEmailError: true,
        });
      }

      if (err?.response.status === 400) {
        setPasswordError({
          passwordErrorMsg: "La contraseña es incorrecta",
          handlePasswordError: true,
        });
      }
    }
  };

  return (
    <LoginSection>
      <Box>
        <Img src={trebol} alt="logo" />
        <HeadingMedium4>Saint Patrick</HeadingMedium4>
        <form action="" onSubmit={handleSubmit}>
          <EmailContainer>
            <ParagraphMedium3>Correo Electrónico</ParagraphMedium3>
            <Input
              nonoBorder={emailError.handleEmailError}
              type="email"
              name="email"
              value={input.email}
              maxLength="50"
              placeholder="Ingesa tu E-mail"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            <ShowLoginErros>{emailError.emailErrorMsg}</ShowLoginErros>
          </EmailContainer>
          <PasswordContainer>
            <ParagraphMedium3>Contraseña</ParagraphMedium3>
            <InputIconContainer>
              <Input
                nonoBorder={passwordError.handlePasswordError}
                type={showPassword ? "text" : "password"}
                name="password"
                value={input.password}
                maxLength="20"
                placeholder="Ingresa tu contraseña"
                onChange={handleChange}
                onKeyUp={handleKeyUp}
              />
              {showEye && <IconEye icon={faEye} onClick={handleClickShow} />}
            </InputIconContainer>
            {passwordError.handlePasswordError && (
              <ShowLoginErros>{passwordError.passwordErrorMsg}</ShowLoginErros>
            )}
          </PasswordContainer>

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
      </Box>
    </LoginSection>
  );
};

export default LoginView;
