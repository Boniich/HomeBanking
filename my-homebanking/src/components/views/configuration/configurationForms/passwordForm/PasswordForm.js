import React, { useState } from 'react';
import { Input } from '../../../../../theme/inputs/input';
import { InputContainer } from '../../../../../theme/inputs/inputContainer/inputContainer';
import { ParagraphMedium3 } from '../../../../../theme/paragraph/paragraph';
import {
	ConfigurationFormInputs,
	ConfigurationFormContent,
	ConfigurationFormContainer,
	SaveChangesButton,
} from '../styleConfigurationForm';
export const PasswordForm = () => {
	const [password, setPassword] = useState({
		password: '123456789',
		confPassword: '123456789',
	});

	const handleChange = e => {
		setPassword({ ...password, [e.target.name]: e.target.value });
	};

	const handleSumit = e => {
		e.preventDefault();
	};

	return (
		<ConfigurationFormContainer onSubmit={handleSumit}>
			<ConfigurationFormContent>
				<ConfigurationFormInputs>
					<InputContainer>
						<ParagraphMedium3>Nueva contraseña</ParagraphMedium3>
						<Input
							type='password'
							name='password'
							disabled={true}
							value={password.password}
							onChange={handleChange}
						/>
					</InputContainer>
					<InputContainer>
						<ParagraphMedium3>Repetir nueva contraseña</ParagraphMedium3>
						<Input
							type='password'
							name='confirPassword'
							disabled={true}
							value={password.confPassword}
							onChange={handleChange}
						/>
					</InputContainer>
				</ConfigurationFormInputs>
				<SaveChangesButton
					disabledBackground={true}
					disableColor={true}
					disableCursor={true}
					disableFocus={true}
					disableHover={true}
					disabled={true}
				>
					Guardar Cambios
				</SaveChangesButton>
			</ConfigurationFormContent>
		</ConfigurationFormContainer>
	);
};
