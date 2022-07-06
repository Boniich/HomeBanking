import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
	errorColor,
	neutralColor,
	primaryColor,
} from '../../../../theme/colors/colors';
import { FooterText } from '../../../../theme/footer/footer';
import {
	ParagraphMedium2,
	ParagraphSemibold2,
} from '../../../../theme/paragraph/paragraph';
import { shadownLG } from '../../../../theme/shadown/shadown';
import { ArrowIcon } from '../../../../theme/styledIcon/styledIcon';
import { CloseButtonContainer } from '../../closeButton/styledCloseButton';
import {
	LogoContainer,
	LogoContent,
	LogoImage,
	LogoTitle,
} from '../../logo/styleLogo';

const MenuIcons = styled(FontAwesomeIcon)`
	width: 24px;
	height: 24px;
	color: ${neutralColor.neutral500};
`;

const UserIcon = styled(FontAwesomeIcon)`
	display: none;
	width: 14px;
	height: 14px;
	color: #ffffff;
`;

const Nav = styled.nav.attrs(props => ({
	backColor: props.backColor || `${neutralColor.neutral700}`,
	titleColor: props.titleColor || `#fff`,
	fontColor: props.fontColor || '#fff',
	iconUserColor: props.iconUserColor || '#fff',
	scrollShadow: props.scrollShadow || 'none',
}))`
	position: fixed;
	bottom: 0;
	background: #ffffff;
	box-shadow: 0px -1px 16px rgba(17, 24, 39, 0.06);
	height: 64px;
	width: 100%;

	${FooterText} {
		cursor: pointer;
		color: ${neutralColor.neutral500};
	}

	@media screen and (min-width: 1512px) {
		height: 84px;
		display: flex;
		justify-content: space-around;
		bottom: none;
		transition: 0.3s ease-in;
		box-shadow: ${props => props.scrollShadow};
		top: 0;
		background: ${props => props.backColor};

		${MenuIcons} {
			display: none;
		}

		${FooterText} {
			color: ${props => props.fontColor};
		}

		${LogoContainer} {
			display: flex;
			margin: 0;
		}

		${LogoContent} {
			flex-direction: row;
			gap: 6.78px;
		}

		${LogoImage} {
			width: 27.13px;
			height: 27.13px;
		}

		${LogoTitle} {
			margin: 0;
			font-size: 20.35px;
			line-height: 24.42px;
			color: ${props => props.titleColor};
		}

		${UserIcon} {
			display: flex;
			color: ${props => props.iconUserColor};
		}
	}
`;

const Ul = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	@media screen and (min-width: 1512px) {
		align-items: center;
	}
`;

const UlMobile = styled(Ul)`
	flex-direction: column;
	display: flex;
	justify-content: space-between;

	@media screen and (min-width: 744px) {
		width: 544px;
		margin: 0 auto;
	}

	@media screen and (min-width: 1512px) {
		justify-content: flex-start;
		align-items: flex-start;

		gap: 10px;
	}
`;

const LinkBox = styled.span``;

const Li = styled.li.attrs(props => ({
	backgroundActiveColor:
		props.backgroundActiveColor === 'changeToGreen'
			? `${primaryColor.primary50}`
			: `rgba(255, 255, 255, 0.1)`,
	activeColor:
		props.activeColor === 'changeToGreen'
			? `${primaryColor.primary600}`
			: `${primaryColor.primary300}`,
	hoverTextColor:
		props.hoverTextColor === 'changeColorHover'
			? `${primaryColor.primary600}`
			: `${primaryColor.primary300}`,
}))`
	display: ${props => (props.off ? 'none' : 'flex')};
	justify-content: center;
	align-items: center;
	width: 120px;
	height: 64px;
	text-align: center;

	@media screen and (min-width: 1512px) {
		display: flex;
		padding: 0 20px;
		width: 100%;
		height: 40px;

		${FooterText} {
			font-size: 16px;
			line-height: 24px;

			&:hover {
				color: ${props => props.hoverTextColor};
			}
		}

		.active > * {
			background: ${props => props.backgroundActiveColor};
			border-radius: 160px;

			font-weight: 600;

			${FooterText} {
				line-height: 40px;
				padding: 0 20px;
				color: ${props => props.activeColor};
			}
		}
	}

	//this class is setted in NavLink by librery
	.active > * {
		color: ${primaryColor.primary500};
		font-weight: 600;
		line-height: 14px;
	}
`;

const LiMobile = styled.li`
	/* padding: 0 24px; */
	margin: 16px 0;

	@media screen and (min-width: 1512px) {
		display: ${props => props.offOnDesktop && 'none'};
		/* 20px of padding of left and right - 228px = 180px*/
		width: 180px;
		height: 40px;
		margin: 0;
	}
`;

const DesktopDropdownNav = styled.div`
	position: absolute;
	background: #fff;
	top: 72px;
	width: 228px;
	/* 20px of padding for each side - 176px = 136px  */
	margin-right: 175px;
	height: 136px;
	box-shadow: ${shadownLG};
	border-radius: 16px;
	padding: 20px 0;
`;

const ListMenu = styled.div`
	position: fixed;
	top: 0;
	background-color: #fff;
	height: 100%;
	width: 100%;

	@media screen and (min-width: 1512px) {
		display: none;
		top: 72px;
		left: 1350px;
		width: 228px;
		height: 176px;
		box-shadow: ${shadownLG};
		border-radius: 16px;
		${CloseButtonContainer} {
			display: none;
		}

		${ArrowIcon} {
			display: none;
		}
	}
`;

const Span = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	padding: 0 24px;

	${ParagraphMedium2} {
		color: ${neutralColor.neutral700};
		margin: 0;
	}

	${ParagraphSemibold2} {
		margin: 0;
		color: ${errorColor.error500};
	}

	&:hover {
		background: ${neutralColor.neutral100};
	}

	@media screen and (min-width: 1512px) {
		width: 100%;
		height: 40px;
	}
`;

const UserImage = styled.img`
	width: 24px;
	height: 24px;
	border-radius: 100%;

	@media screen and (min-width: 1512px) {
		width: 36px;
		height: 36px;
		object-fit: cover;
	}
`;

const UserName = styled(FooterText)`
	cursor: pointer;
	@media screen and (min-width: 1512px) {
		display: none;
	}
`;

const UserBox = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2px;
	cursor: pointer;
`;

export {
	Nav,
	UserBox,
	UserName,
	UserImage,
	Li,
	LiMobile,
	LinkBox,
	Span,
	ListMenu,
	UlMobile,
	Ul,
	MenuIcons,
	UserIcon,
	DesktopDropdownNav,
};
