/*
 * It contains background icon for some icons like the check of transference modal
 */

import styled from 'styled-components';
import { secondaryColor, successColor } from '../../../theme/colors/colors';

export const BackgroundIcon = styled.span.attrs(props => ({
	tranfbackgroundiconwidth:
		props.tranfbackgroundiconwidth === true ? '64px' : '80px',
	tranfbackgroundiconheight:
		props.tranfbackgroundiconheight === true ? '64px' : '80px',
	tranfbackgroundcoloricon:
		props.tranfbackgroundcoloricon === 'successColor'
			? ` ${successColor.success600}`
			: `${secondaryColor.secondary200}`,
}))`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: ${props => props.mobileMarginBottom};
	border-radius: 120px;
	width: ${props => props.tranfbackgroundiconwidth};
	height: ${props => props.tranfbackgroundiconheight};
	background: ${props => props.tranfbackgroundcoloricon};

	@media screen and (min-width: 744px) {
		margin-bottom: ${props => props.tableMarginBottom};
	}
`;
