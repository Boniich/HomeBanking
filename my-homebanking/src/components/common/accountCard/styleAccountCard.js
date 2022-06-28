import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { neutralColor, successColor } from '../../../theme/colors/colors';

const BackgroundIconOfActiveAccoun = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${successColor.success600};
	width: 24px;
	height: 24px;
	border-radius: 100%;
`;

const ActiveAccountIcon = styled(FontAwesomeIcon)`
	width: 14px;
	height: 14px;
	color: #fff;
`;

const AccountContainer = styled.div`
	width: 100%;
	height: 85px;
	background: ${neutralColor.neutral100};
	border: 1px solid ${neutralColor.neutral300};
	border-radius: 8px;
	cursor: pointer;
`;

const AccountContent = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
	gap: 16px;
`;
const AccountTypeLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AccountData = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	width: 144px;

	@media screen and (min-width: 744px) {
		width: 216px;
	}
`;

const LogoOnAccountTypeButton = styled.img`
	width: 24px;
	height: 24px;
`;

export {
	AccountContainer,
	AccountContent,
	AccountTypeLogo,
	AccountData,
	LogoOnAccountTypeButton,
	BackgroundIconOfActiveAccoun,
	ActiveAccountIcon,
};
