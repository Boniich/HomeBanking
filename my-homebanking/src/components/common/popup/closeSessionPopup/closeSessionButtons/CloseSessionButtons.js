import React from 'react';
import { ButtonsContainer } from '../../../../../theme/buttons/buttonContainer/buttonContainer';
import {
	KeepSessionActiveButton,
	CloseSessionButton,
} from '../../../../../theme/buttons/buttons';

export const CloseSessionButtons = () => {
	const closeSession = () => {
		sessionStorage.clear();
		window.location.reload();
	};

	return (
		<ButtonsContainer>
			<KeepSessionActiveButton>Mantener activa</KeepSessionActiveButton>
			<CloseSessionButton onClick={closeSession}>
				Cerrar sesión
			</CloseSessionButton>
		</ButtonsContainer>
	);
};
