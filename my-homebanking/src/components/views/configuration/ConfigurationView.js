import React, { useState } from 'react';
import { ButtonsContainer } from '../../../theme/buttons/buttonContainer/buttonContainer';
import { ConfigButton } from '../../../theme/buttons/buttons';
import { SecondaryNav } from '../../common/navs/secondaryNav/SecondaryNav';
import { successColor } from '../../../theme/colors/colors';
import { PasswordForm } from './configurationForms/passwordForm/PasswordForm';
import { Notification } from '../../common/notification/Notification';
import { ConfigurationSection } from './styleConfiguration';
import { UpdateDataForm } from './configurationForms/userDataForm/UpdateDataForm';

export const ConfigurationView = () => {
	const uniqueString = 'Configuración';
	const notificationBackground = successColor.success50;
	const notificationBorder = successColor.success300;
	const [switchSection, setSwitchSection] = useState({
		personalData: true,
		accountData: false,
	});
	const changeToAccountData = () => {
		setSwitchSection({ personalData: false, accountData: true });
	};

	const changeToPersonalData = () => {
		setSwitchSection({ personalData: true, accountData: false });
	};

	return (
		<>
			<SecondaryNav
				shortNavText={uniqueString}
				largeNavText={uniqueString}
				spaceWidthInConfig
			/>
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
				{switchSection.personalData ? <UpdateDataForm /> : <PasswordForm />}
			</ConfigurationSection>
			<Notification
				background={notificationBackground}
				border={notificationBorder}
			/>
		</>
	);
};
