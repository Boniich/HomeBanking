import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonsContainer } from '../../../theme/buttons/buttonContainer/buttonContainer';
import { Button, ConfigButton } from '../../../theme/buttons/buttons';
import { ParagraphMedium3 } from '../../../theme/paragraph/paragraph';
import { SecondaryNav } from '../../common/navs/secondaryNav/SecondaryNav';
import nouUserImage from '../../../assets/noUserImage.png';
import { errorColor, neutralColor, successColor } from '../../../theme/colors/colors';
import { InputContainer } from '../../../theme/inputs/inputContainer/inputContainer';
import { ChangeImageInput, Input } from '../../../theme/inputs/input';
import { ChangeImageLabel } from '../../../theme/labels/labels';
import AccountContext from '../../../context/accountContext/AccountContext';
import { PasswordForm } from './configurationForms/passwordForm/PasswordForm';
import {
	ConfigurationFormContainer,
	ConfigurationFormContent,
	ConfigurationFormInputs,
} from './configurationForms/styleConfigurationForm';
import { ProcessingRequestButton } from '../../common/processingRequestButtton/ProcessingRequestButton';
import { Notification } from '../../common/notification/Notification';
const ConfigurationSection = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	margin-top: 40px;

	@media screen and (min-width: 744px) {
		gap: 48px;
	}
`;

const ChangeImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	${ParagraphMedium3} {
		color: ${neutralColor.neutral700};
	}
`;

const ChangeImageContent = styled.div`
	display: flex;
	gap: 16px;
`;

const Image = styled.img`
	width: 54px;
	height: 54px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 100%;
`;

const ImageButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const DeleteImageButton = styled(ConfigButton)`
	padding: 12px;
	width: 76px;
	border-radius: 8px;
	color: ${errorColor.error600};
`;

const SaveChangesButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 18px 24px;
	margin-top: 8px;

	@media screen and (min-width: 744px) {
		width: 183px;
	}
`;

export const ConfigurationView = () => {
	const uniqueString = 'Configuración';
	const notificationBackground = successColor.success50;
	const notificationBorder = successColor.success300;
	const [switchSection, setSwitchSection] = useState({
		personalData: true,
		accountData: false,
	});
	const {
		name,
		lastName,
		userImage,
		userEmail,
		updateDataUser,
		updateDataUserLoader,
	} = useContext(AccountContext);
	const [dataUser, setDataUser] = useState({
		name: '',
		lastName: '',
		image: '',
		email: '',
	});

	useEffect(() => {
		setDataUser({ name, lastName, image: userImage, email: userEmail });
	}, [name]);

	const handleChange = e => {
		setDataUser({ ...dataUser, [e.target.name]: e.target.value });
	};

	const changeToAccountData = () => {
		setSwitchSection({ personalData: false, accountData: true });
	};

	const changeToPersonalData = () => {
		setSwitchSection({ personalData: true, accountData: false });
	};

	const handleSubmit = e => {
		e.preventDefault();
		updateDataUser(dataUser.name, dataUser.lastName, dataUser.image);
	};
	return (
		<>
			<SecondaryNav shortNavText={uniqueString} largeNavText={uniqueString} />
			<ConfigurationSection>
				<ButtonsContainer>
					<ConfigButton
						onClick={changeToPersonalData}
						switchBackground={switchSection.personalData}
						switchColor={switchSection.personalData}
						switchFontWeight={switchSection.personalData}
						switchBorder={switchSection.personalData}
					>
						Datos Personales
					</ConfigButton>
					<ConfigButton
						onClick={changeToAccountData}
						switchBackground={switchSection.accountData}
						switchColor={switchSection.accountData}
						switchFontWeight={switchSection.accountData}
						switchBorder={switchSection.accountData}
					>
						Cambiar contraseña
					</ConfigButton>
				</ButtonsContainer>
				{/* Form to image, name and last name */}
				{switchSection.personalData ? (
					<ConfigurationFormContainer onSubmit={handleSubmit}>
						<ConfigurationFormContent>
							<ChangeImageContainer>
								<ParagraphMedium3>Avatar</ParagraphMedium3>
								<ChangeImageContent>
									<Image
										src={
											userImage
												? `data:image/png;base64,${dataUser.image}`
												: nouUserImage
										}
									/>
									<ImageButtonsContainer>
										<ChangeImageLabel>
											Cambiar
											<ChangeImageInput
												type='file'
												accept='image/png, image/jpeg'
												name='image'
												onChange={handleChange}
											/>
										</ChangeImageLabel>
										<DeleteImageButton switchBorder={true}>
											Eliminar
										</DeleteImageButton>
									</ImageButtonsContainer>
								</ChangeImageContent>
							</ChangeImageContainer>
							<ConfigurationFormInputs>
								<InputContainer>
									<ParagraphMedium3>Nombres</ParagraphMedium3>
									<Input
										type='text'
										name='name'
										value={dataUser.name}
										onChange={handleChange}
									/>
								</InputContainer>
								<InputContainer>
									<ParagraphMedium3>Apellidos</ParagraphMedium3>
									<Input
										type='text'
										name='lastName'
										value={dataUser.lastName}
										onChange={handleChange}
									/>
								</InputContainer>
								<InputContainer>
									<ParagraphMedium3>Email</ParagraphMedium3>
									<Input
										type='email'
										name='email'
										value={dataUser.email}
										disabled={true}
										onChange={handleChange}
									/>
								</InputContainer>
							</ConfigurationFormInputs>
							<SaveChangesButton>
								<ProcessingRequestButton
									state={updateDataUserLoader}
									textBeforeRequest='Guardar Cambios'
								/>
							</SaveChangesButton>
						</ConfigurationFormContent>
					</ConfigurationFormContainer>
				) : (
					<PasswordForm />
				)}
			</ConfigurationSection>
			<Notification background={notificationBackground} border={notificationBorder}/>
		</>
	);
};
