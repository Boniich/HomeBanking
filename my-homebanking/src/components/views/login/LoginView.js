import React, { useContext } from 'react';
import {
	Box,
	EmailContainer,
	IconEye,
	Input,
	InputIconContainer,
	LoginSection,
	PasswordContainer,
	ShowLoginErros,
} from './styles';
import {
	ParagraphMedium3,
	ParagraphUnderline3,
} from '../../../theme/paragraph/paragraph';
import { Button } from '../../../theme/buttons/buttons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Loader } from '../../common/loader/Loader';
import { Logo } from '../../common/logo/Logo';
import AuthContext from '../../../context/authContext/AuthContext';

const LoginView = () => {
	const {
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
	} = useContext(AuthContext);
	return (
		<LoginSection>
			<Box>
				<Logo url='' activeOnLogin />
				<form action='' onSubmit={handleSubmit}>
					<EmailContainer>
						<ParagraphMedium3>Correo Electrónico</ParagraphMedium3>
						<Input
							nonoBorder={emailError.handleEmailError}
							type='email'
							name='email'
							value={input.email}
							maxLength='50'
							placeholder='Ingesa tu E-mail'
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
								type={showPassword ? 'text' : 'password'}
								name='password'
								value={input.password}
								maxLength='20'
								placeholder='Ingresa tu contraseña'
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
					<Button
						disabledBackground={isDisable}
						disableColor={isDisable}
						disableCursor={isDisable}
						disableFocus={isDisable}
						disableHover={isDisable}
						type='submit'
						disabled={isDisable}
					>
						{showLoader ? <Loader circleColor='#fff' /> : 'Iniciar Sesión'}
					</Button>
				</form>
			</Box>
		</LoginSection>
	);
};

export default LoginView;
