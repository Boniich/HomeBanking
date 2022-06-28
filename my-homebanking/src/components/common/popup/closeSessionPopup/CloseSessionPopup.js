import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { neutralColor } from '../../../../theme/colors/colors';
import {
	HeadingBold5, HeadingSemiBold5,
} from '../../../../theme/heading/heading';
import { CheckIcon } from '../../../../theme/styledIcon/styledIcon';
import { BackgroundIcon } from '../../backgroundIcons/backgroundIcons';
import { CloseButton } from '../../closeButton/CloseButton';
import {
	Modal,
	ModalContainer,
	ModalHeader,
	ModalSubContent,
	ModalTextAndIcons,
	StyledPopup,
} from '../stylePopup';
import { CloseSessionButtons } from './closeSessionButtons/CloseSessionButtons';

// this modal is not like other cause i need can be able to access to function "close"

export const CloseSessionPopup = React.forwardRef(( props, ref) => {
	return (
		<StyledPopup
			ref={ref}
			background={neutralColor.neutral700}
			modal
			trigger={props.action}
			closeOnDocumentClick={false}
			closeOnEscape={false}
		>
			{close => (
				<Modal
					width='316px'
					height='418px'
					tableWidth='544px'
					tableHeight='544px'
					desktopWidth='686px'
					desktopHeight='642px'
				>
					<ModalContainer>
						<ModalHeader>
						<HeadingSemiBold5></HeadingSemiBold5>
							<CloseButton propOnClick={close} />
						</ModalHeader>

						<ModalSubContent>
							<ModalTextAndIcons>
								<BackgroundIcon>
									<CheckIcon icon={faCircleInfo}></CheckIcon>
								</BackgroundIcon>
								<HeadingBold5>¿Desea cerrar la sesión?</HeadingBold5>
							</ModalTextAndIcons>
							<CloseSessionButtons propOnClick={close}/>
						</ModalSubContent>
					</ModalContainer>
				</Modal>
			)}
		</StyledPopup>
	);
});
