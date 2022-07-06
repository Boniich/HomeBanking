import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
	HeadingBold5,
	HeadingSemiBold5,
} from '../../../../theme/heading/heading';
import { CheckIcon } from '../../../../theme/styledIcon/styledIcon';
import { BackgroundIcon } from '../../backgroundIcons/backgroundIcons';
import { CloseButton } from '../../closeButton/CloseButton';

import { CloseSessionButtons } from './closeSessionButtons/CloseSessionButtons';
import {
	Modal,
	ModalContainer,
	ModalHeader,
	ModalSubContent,
	ModalTextAndIcons,
	StyledPopup,
} from '../stylePopup';

// this modal is not like other cause i need can be able to access to function "close"

export const CloseSessionPopup = React.forwardRef((props, ref) => {
	const backgroundColor = `rgb(55, 65, 81,0.9)`;
	return (
		<StyledPopup
			ref={ref}
			background={backgroundColor}
			modal
			trigger={props.action}
			closeOnDocumentClick={false}
			closeOnEscape={false}
		>
			{close => (
				<Modal
					width='312px'
					height='372px'
					tableWidth='448px'
					tableHeight='406px'
					desktopWidth='448px'
					desktopHeight='406px'
					borderRadius='24px'
				>
					<ModalContainer padding='32px' tabletPadding>
						<ModalHeader marginBotton='0' marginBottonTable='20px'>
							<HeadingSemiBold5></HeadingSemiBold5>
							<CloseButton propOnClick={close} />
						</ModalHeader>

						<ModalSubContent>
							<ModalTextAndIcons>
								<BackgroundIcon>
									<CheckIcon icon={faCircleInfo}></CheckIcon>
								</BackgroundIcon>
								<HeadingBold5>¿Desea cerrar sesión?</HeadingBold5>
							</ModalTextAndIcons>
							<CloseSessionButtons propOnClick={close} />
						</ModalSubContent>
					</ModalContainer>
				</Modal>
			)}
		</StyledPopup>
	);
});
