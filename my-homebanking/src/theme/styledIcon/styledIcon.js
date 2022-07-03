// This are components that handle icons for will use many times
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { neutralColor, primaryColor, secondaryColor } from '../colors/colors';

const CloseIcon = styled(FontAwesomeIcon)`
	width: 9.33px;
	height: 9.33px;
	color: ${neutralColor.neutral700};
`;
const ArrowIcon = styled(FontAwesomeIcon)`
	width: 16px;
	height: 16px;
	color: ${neutralColor.neutral300};
`;

const SendArrowIcon = styled(ArrowIcon)`
	color: ${primaryColor.primary500};
	font-size: 14px;
	margin-right: 10px;
`;

const NotFoundArrowIcon = styled(ArrowIcon)`
	color: #fff;
`;

const CheckIcon = styled(FontAwesomeIcon).attrs(props => ({
	tranfcheckiconwidth: props.tranfcheckiconwidth === true ? '29.09px' : '32px',
	tranfcheckiconheight:
		props.tranfcheckiconheight === true ? '29.09px' : '32px',
	tranfcoloricon:
		props.tranfcoloricon === 'white'
			? '#fff'
			: `${secondaryColor.secondary800}`,
}))`
	width: ${props => props.tranfcheckiconwidth};
	height: ${props => props.tranfcheckiconheight};
	color: ${props => props.tranfcoloricon};
`;

export { CloseIcon, ArrowIcon, SendArrowIcon, CheckIcon, NotFoundArrowIcon };
