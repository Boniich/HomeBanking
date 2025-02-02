import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [emailError, setEmailError] = useState({
		emailErrorMsg: '',
		handleEmailError: false,
	});
	const [passwordError, setPasswordError] = useState({
		passwordErrorMsg: '',
		handlePasswordError: false,
	});
	const [isDisable, setIsDisable] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const [showEye, setShowEye] = useState(false);
	const [input, setInput] = useState({
		email: '',
		password: '',
	});
	const [showLoader, setShowLoader] = useState(false);

	const navigate = useNavigate();

	const url = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_AUTH_ENDPOINT}`;
	const handleChange = e => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleKeyUp = () => {
		if (input.password.length !== 0) {
			setShowEye(true);
		} else {
			setShowEye(false);
		}

		if (input.email.length !== 0 && input.password.length !== 0) {
			setIsDisable(false);
		}else{
			setIsDisable(true);
		}
	};

	const handleClickShow = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setShowLoader(true);
		setEmailError({ handleEmailError: false });
		setPasswordError({ handlePasswordError: false });
		try {
			const appToken = `${process.env.REACT_APP_TOKEN_KEY}`;

			const response = await axios.post(
				url,
				{
					email: input.email,
					password: input.password,
					token: appToken,
				},
				{
					headers: {
						'content-type': 'application/json',
					},
				}
			);
			sessionStorage.setItem('token', response.data.token);
			sessionStorage.setItem('data', response.data.email);
			navigate('/', { replace: true });
		} catch (err) {
			console.log('error', err);
			if (err?.response.status === 404) {
				setEmailError({
					emailErrorMsg: 'Email no encontrado',
					handleEmailError: true,
				});
			}

			if (err?.response.status === 400) {
				setPasswordError({
					passwordErrorMsg: 'La contraseña es incorrecta',
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
		handleChange,
		handleKeyUp,
		handleClickShow,
		handleSubmit,
	};
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
