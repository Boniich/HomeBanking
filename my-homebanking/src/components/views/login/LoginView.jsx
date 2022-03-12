import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  EmailContainer,
  IconEye,
  Img,
  InputIconContainer,
  LoginSection,
  PasswordContainer,
} from "./styles";
import trebol from "../../../assets/trebol.png";
import { HeadingMedium4 } from "../../../theme/heading/heading";
import {
  ParagraphMedium3,
  ParagraphUnderline3,
} from "../../../theme/paragraph/paragraph";
import { Button } from "../../../theme/buttons/buttons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { validateLogin } from "./validate";
import { Caption } from "../../../theme/caption/caption";

const LoginView = () => {
  const [error, setError] = useState({email: false, password: false});
  const [isDisable, setIsDisable] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  let url = "http://challenge-react.alkemy.org/";
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
    try{
      const response = await axios.post(url,JSON.stringify({
        email: input.email,
        password: input.password
      }),{
        headers: { "Content-Type": "application/json" },
      }
      );
      console.log(response);
    }catch(err){
      console.log(err);



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
            <input
              type="email"
              name="email"
              value={input.email}
              maxLength="50"
              placeholder="Ingesa tu E-mail"
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            {error.email && <Caption>El email es incorrecto</Caption>}
          </EmailContainer>
          <PasswordContainer>
            <ParagraphMedium3>Contraseña</ParagraphMedium3>
            <InputIconContainer>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={input.password}
                maxLength="16"
                placeholder="Ingresa tu contraseña"
                onChange={handleChange}
                onKeyUp={handleKeyUp}
              />
              {showEye && <IconEye icon={faEye} onClick={handleClickShow} />}
            </InputIconContainer>
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
