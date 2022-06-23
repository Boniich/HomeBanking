import styled from 'styled-components';
import { neutralColor } from '../../../../../../theme/colors/colors';
import {
	ParagraphMedium3,
	ParagraphSemibold2,
} from '../../../../../../theme/paragraph/paragraph';
import { ArrowIcon } from '../../../../../../theme/styledIcon/styledIcon';

const UserResultContainer = styled.div.attrs(props => ({
	removeBorder: props.removeBorder
		? 'none'
		: `1px solid ${neutralColor.neutral300}`,
	removePadding: props.removePadding ? '0' : '16px',
}))`
	display: flex;
	align-items: center;
	padding: ${props => props.removePadding};
	gap: 12px;
	background: ${neutralColor.neutral50};
	border: ${props => props.removeBorder};
	border-radius: 8px;
`;

const UserImage = styled.img`
	width: 36px;
	height: 36px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 100%;
`;

const DataUser = styled.div`
	width: 156px;
	display: flex;
	flex-direction: column;
	gap: 4px;

	${ParagraphSemibold2} {
		color: ${neutralColor.neutral800};
	}

	@media screen and (min-width: 744px) {
		width: 230px;
	}
`;

const ArrowIconOfUserResult = styled(ArrowIcon).attrs(props => ({
	disableicon: props.disableicon ? 'none' : 'flex',
}))`
	display: ${props => props.disableicon};
	color: ${neutralColor.neutral700};
`;

export { UserResultContainer, UserImage, DataUser, ArrowIconOfUserResult };
