import React from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { CloseIcon } from '../../../theme/styledIcon/styledIcon';

import { CloseButtonContainer, CloseButtonContent } from './styledCloseButton';

export const CloseButton = ({
	propOnClick,
	tabletMargin,
	tableWidth,
	tableRightPadding,
}) => {
	return (
		<CloseButtonContainer
			tabletMargin={tabletMargin}
			tableWidth={tableWidth}
			tableRightPadding={tableRightPadding}
		>
			<CloseButtonContent onClick={propOnClick}>
				<CloseIcon icon={faX}></CloseIcon>
			</CloseButtonContent>
		</CloseButtonContainer>
	);
};
