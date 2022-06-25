import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonsContainer } from '../../../theme/buttons/buttonContainer/buttonContainer';
import { Button, ConfigButton } from '../../../theme/buttons/buttons';
import { ParagraphMedium3 } from '../../../theme/paragraph/paragraph';
import { SecondaryNav } from '../../common/navs/secondaryNav/SecondaryNav';
import nouUserImage from '../../../assets/noUserImage.png';
import {
	errorColor,
	neutralColor,
	successColor,
} from '../../../theme/colors/colors';
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

const DeleteImageButton = styled.p`
	font-size: 14px;
	line-height: 17px;
	font-weight: 400px;
	color: ${errorColor.error600};
	padding: 12px;
	width: 76px;
`;

const ChangeImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	${ChangeImageInput} {
		color: ${neutralColor.neutral800};
	}

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
	object-fit: cover;
`;

const ImageButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
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

	function getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	}

	useEffect(() => {
		setDataUser({ name, lastName, image: userImage, email: userEmail });
	}, [name]);

	const handleChange = e => {
		setDataUser({ ...dataUser, [e.target.name]: e.target.value });
	};

	const handleChangeImage = img => {
		setDataUser({ ...dataUser, image: img });
	};

	const deleteUserImage =  async () => {
		// save the sring "img-deleted for delete img of data base. 
		// if i find some way better i will change it
		setDataUser({...dataUser, image: "img-deleted" });
	};

	const changeToAccountData = () => {
		setSwitchSection({ personalData: false, accountData: true });
	};

	const changeToPersonalData = () => {
		setSwitchSection({ personalData: true, accountData: false });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(dataUser);
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
									<Image src={(userImage && dataUser.image !== "img-deleted") ? `${dataUser.image}` : nouUserImage} />
									<ImageButtonsContainer>
										<ChangeImageLabel>
											Cambiar
											<ChangeImageInput
												type='file'
												accept='image/png, image/jpeg'
												onChange={async e => {
													const img = await getBase64(e.target.files[0]);
													handleChangeImage(img);
												}}
											/>
										</ChangeImageLabel>
										<DeleteImageButton onClick={deleteUserImage}>
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
							<SaveChangesButton type='submit' role='button'>
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
			<Notification
				background={notificationBackground}
				border={notificationBorder}
			/>
		</>
	);
};
