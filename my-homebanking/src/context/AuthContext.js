import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bcryptjs from "bcryptjs";
import axios from "axios";
const { hash } = bcryptjs;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
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
  const [showLoader, setShowLoader] = useState(false);
  const [token, setToken] = useState(null);

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
    setShowLoader(true);
    setEmailError({ handleEmailError: false });
    setPasswordError({ handlePasswordError: false });
    try {
      const appToken = await hash(`${process.env.REACT_APP_TOKEN_KEY}`, 10);

      const response = await axios.post(
        url,
        {
          email: input.email,
          password: input.password,
        },
        {
          headers: {
            "content-type": "application/json",
            "app-token": appToken,
          },
        }
      );
      console.log(response);
      // const token = localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      navigate(from, { replace: true });
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
    } finally {
      setShowLoader(false);
    }
  };

  const data = {
    emailError,
    passwordError,
    isDisable,
    showPassword,
    showEye,
    input,
    showLoader,
    token,
    handleChange,
    handleKeyUp,
    handleClickShow,
    handleSubmit,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
