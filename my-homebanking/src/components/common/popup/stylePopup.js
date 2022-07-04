import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { Caption } from '../../../theme/caption/caption';
import { neutralColor } from '../../../theme/colors/colors';
import { HeadingBold5, HeadingSemiBold5 } from '../../../theme/heading/heading';
import {
	ParagraphMedium2,
	ParagraphSemibold3,
} from '../../../theme/paragraph/paragraph';
import { SendArrowIcon } from '../../../theme/styledIcon/styledIcon';
import { CloseButtonContainer } from '../closeButton/styledCloseButton';
import { SendButtonContainer } from '../sendButton/styleSendButton';

const Modal = styled.div`
	width: ${props => props.width || `312px`};
	height: ${props => props.height || `244px`};
	background: #ffffff;
	border-radius: 16px;
	box-shadow: ${props => props.shadow || 'none'};
	@media screen and (min-width: 744px) {
		width: ${props => props.tableWidth || `400px`};
		height: ${props => props.tableHeight || 'auto'};
	}

	@media screen and (min-width: 1512px) {
		width: ${props => props.desktopWidth || `400px`};
		height: ${props => props.desktopHeight || 'auto'};
	}
`;

const ModalContainer = styled.div`
	padding: 24px 24px 32px;
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 26px;

	${HeadingSemiBold5} {
		color: ${neutralColor.neutral800};
	}

	//Component inside of CloseButton
	${CloseButtonContainer} {
		display: flex;
		margin: 0;
		padding: 0;
	}
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	${SendButtonContainer} {
		margin: 0;
		background: transparent;
		border: 1px solid ${neutralColor.neutral300};
		color: ${neutralColor.neutral800};

		${SendArrowIcon} {
			color: ${neutralColor.neutral700};
		}

		&:hover {
			transition: all 0.5s;
			background-color: ${neutralColor.neutral100};
		}
	}
`;

const ModalSubContent = styled.div.attrs(props => ({
	changeGap: props.changeGap && '48px',
}))`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${props => props.changeGap || '32px'};
	margin-top: ${props => props.marginTop || '12px'};

	@media screen and (min-width: 744px) {
		gap: ${props => props.changeGap || '64px'};
		margin-top: ${props => props.marginTop || '33px'};
	}

	@media screen and (min-width: 1512px) {
		margin-top: ${props => props.marginTop || '80px'};
	}
`;

const ModalTextAndIcons = styled.div.attrs(props => ({
	mobileDisableFlexGap: props.mobileDisableFlexGap === true ? '0' : '24px',
	tableDisableFlexGap: props.tableDisableFlexGap === true ? '0' : '32px',
	tableHeadingText: props.tableHeadingText === true ? '24px' : '30px',
	tableHeadingLineHeight:
		props.tableHeadingLineHeight === true ? '130%' : '120%',
	mobileMarginTranf: props.mobileMarginTranf === true ? '16px 0' : '0',
	tableMarginTranf: props.tableMarginTranf === true ? '21px 0 20px 0' : '0',
}))`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${props => props.mobileDisableFlexGap};

	/* only is visible in the transference modal */
	${ParagraphMedium2} {
		color: ${neutralColor.neutral800};
	}

	${HeadingBold5} {
		width: 251px;
		margin: 0;
		text-align: center;
		font-weight: 700;
		color: ${neutralColor.neutral800};
		margin: ${props => props.mobileMarginTranf};
	}

	/* only is visible in the transference modal */
	${ParagraphSemibold3} {
		color: ${neutralColor.neutral800};
		margin-bottom: 3px;
	}

	${Caption} {
		color: ${neutralColor.neutral500};
	}

	@media screen and (min-width: 744px) {
		gap: ${props => props.tableDisableFlexGap};
		${HeadingBold5} {
			width: 396px;
			font-size: ${props => props.tableHeadingText};
			line-height: ${props => props.tableHeadingLineHeight};
			letter-spacing: -0.01em;
			font-weight: 600;
			margin: ${props => props.tableMarginTranf};
		}

		${ParagraphMedium2} {
			font-size: 18px;
			line-height: 22px;
		}

		${ParagraphSemibold3} {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

const StyledPopup = styled(Popup)`
	&-overlay {
		background: ${props => props.background || `rgba(17, 24, 39, 0.9)`};
	}

	&-content {
		${Modal}
		${ModalContainer}
    ${ModalHeader}
  ${ModalContent}
	}
`;

export {
	StyledPopup,
	Modal,
	ModalContainer,
	ModalHeader,
	ModalContent,
	ModalSubContent,
	ModalTextAndIcons,
};
