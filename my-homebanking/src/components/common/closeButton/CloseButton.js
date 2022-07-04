import React from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { CloseIcon } from '../../../theme/styledIcon/styledIcon';

import { CloseButtonContainer, CloseButtonContent } from './styledCloseButton';

export const CloseButton = ({ propOnClick }) => {
	return (
		<CloseButtonContainer>
			<CloseButtonContent onClick={propOnClick}>
				<CloseIcon icon={faX}></CloseIcon>
			</CloseButtonContent>
		</CloseButtonContainer>
	);
};
