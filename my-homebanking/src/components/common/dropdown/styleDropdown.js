import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { neutralColor, primaryColor } from '../../../theme/colors/colors';
import {
	ParagraphMedium2,
	ParagraphMedium3,
	ParagraphSemibold2,
	ParagraphSemibold3,
} from '../../../theme/paragraph/paragraph';
import { shadownMD } from '../../../theme/shadown/shadown';

const WrapperDropdown = styled.div`
	display: flex;
	min-height: 78px;
	flex-wrap: wrap;
	position: relative;
`;

const HeaderDropdown = styled.div.attrs(props => ({
	isOwnAccDestinySelectBackground: props.isOwnAccDestinySelectBackground
		? `${neutralColor.neutral100}`
		: `${primaryColor.primary50}`,
	isOwnAccDestinySelectBorder: props.isOwnAccDestinySelectBorder
		? `${neutralColor.neutral300}`
		: `${primaryColor.primary500}`,
}))`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	width: 100%;
	background: ${props => props.isOwnAccDestinySelectBackground};
	border: 1px solid ${props => props.isOwnAccDestinySelectBorder};
	border-radius: 8px;
	padding: 0 16px;
`;

const HeaderContent = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
`;
const AccountInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

	${ParagraphSemibold2} {
		color: ${neutralColor.neutral800};
	}

	${ParagraphMedium3} {
		color: ${neutralColor.neutral500};
	}

	${ParagraphSemibold3} {
		color: ${neutralColor.neutral800};
	}
`;

const NoOtherAccountMsgContainer = styled.span`
	text-align: center;
	${ParagraphMedium2} {
		color: ${neutralColor.neutral800};
	}
`;

const AmountInOthersAccounts = styled.span`
	${ParagraphSemibold3} {
		color: #000;
	}
`;

const DropdownList = styled.ul`
	/* original width: 312px - 32px (16 + 16) of padding = 280px */
	width: 280px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: absolute;
	top: 70px;
	background: #fff;
	z-index: 100;
	box-shadow: ${shadownMD};
	padding: 16px;
	margin: 0;
	margin-top: 20px;
	border-radius: 8px;

	@media screen and (min-width: 744px) {
		/* original width: 404px - 48px (24 + 24) of padding = 356px */
		width: 356px;
		padding: 24px;
	}
`;

const DropdownArrowContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 9px;

	${ParagraphSemibold3} {
		color: ${neutralColor.neutral800};
	}
`;

const DropdownArrow = styled(FontAwesomeIcon)`
	width: 12px;
	height: 12px;
	color: ${neutralColor.neutral800};
`;

const DropdownItemList = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${neutralColor.neutral100};
	padding: 16px;
	border: 1px solid ${neutralColor.neutral300};
	border-radius: 4px;
	cursor: pointer;
`;

export {
	WrapperDropdown,
	HeaderDropdown,
	HeaderContent,
	AccountInfoContainer,
	DropdownList,
	DropdownArrowContainer,
	DropdownArrow,
	DropdownItemList,
	NoOtherAccountMsgContainer,
	AmountInOthersAccounts,
};
