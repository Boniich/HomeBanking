import React from 'react';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { neutralColor } from '../../../../theme/colors/colors';
import { HeadingBold5 } from '../../../../theme/heading/heading';
import { CheckIcon } from '../../../../theme/styledIcon/styledIcon';
import { BackgroundIcon } from '../../backgroundIcons/backgroundIcons';
import { Popup } from '../Popup';
import { ModalSubContent, ModalTextAndIcons } from '../stylePopup';
import { CloseSessionButtons } from './closeSessionButtons/CloseSessionButtons';

export const CloseSessionPopup = ({ children, text }) => {
	return (
		<Popup
			action={children}
			background={neutralColor.neutral700}
			width='316px'
			height='418px'
			tableWidth='544px'
			tableHeight='544px'
			desktopWidth='686px'
			desktopHeight='642px'
			showHeader={true}
			closeIcon={true}
		>
			<ModalSubContent>
				<ModalTextAndIcons>
					<BackgroundIcon>
						<CheckIcon icon={faCircleInfo}></CheckIcon>
					</BackgroundIcon>
					<HeadingBold5>{text}</HeadingBold5>
				</ModalTextAndIcons>
				<CloseSessionButtons />
			</ModalSubContent>
		</Popup>
	);
};
