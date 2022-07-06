import React from 'react';
import { ButtonsContainer } from '../../../../../theme/buttons/buttonContainer/buttonContainer';
import {
	KeepSessionActiveButton,
	CloseSessionButton,
} from '../../../../../theme/buttons/buttons';

export const CloseSessionButtons = ({ propOnClick }) => {
	const closeSession = () => {
		sessionStorage.clear();
		window.location.reload();
	};

	return (
		<ButtonsContainer>
			<CloseSessionButton onClick={propOnClick}>Cancelar</CloseSessionButton>
			<KeepSessionActiveButton onClick={closeSession}>
				Si, cerrar sesión
			</KeepSessionActiveButton>
		</ButtonsContainer>
	);
};
