import {
	faAngleRight,
	faCaretDown,
	faHouseChimney,
	faRightLeft,
} from '@fortawesome/free-solid-svg-icons';
import React, { createRef, useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AccountContext from '../../../../context/accountContext/AccountContext';
import { neutralColor } from '../../../../theme/colors/colors';
import { FooterText } from '../../../../theme/footer/footer';
import {
	ParagraphMedium2,
	ParagraphSemibold2,
} from '../../../../theme/paragraph/paragraph';
import { shadownLG } from '../../../../theme/shadown/shadown';
import { ArrowIcon } from '../../../../theme/styledIcon/styledIcon';
import { CloseButton } from '../../closeButton/CloseButton';
import { Logo } from '../../logo/Logo';
import noUserImage from '../../../../assets/noUserImage.png';
import { CloseSessionPopup } from '../../popup/closeSessionPopup/CloseSessionPopup';
import {
	DesktopDropdownNav,
	Li,
	LiMobile,
	LinkBox,
	ListMenu,
	MenuIcons,
	Nav,
	Span,
	Ul,
	UlMobile,
	UserBox,
	UserIcon,
	UserImage,
	UserName,
} from './stylePrimaryNav';

export const PrimaryNav = ({ activeSecondColorNav }) => {
	const [responsiveNav, setResponsiveNav] = useState(false);
	const [changeColorNav, setChangeColorNav] = useState(false);
	const { name, userImage } = useContext(AccountContext);
	const ref = createRef();

	useEffect(() => {
		setSecondayNavColor();
	}, []);

	const openResponsiveNav = () => {
		setResponsiveNav(!responsiveNav);
	};

	const closeResponsivenav = () => {
		setResponsiveNav(false);
	};

	const changeBackgroundColorNav = () => {
		window.scrollY >= 120 ? setChangeColorNav(true) : setChangeColorNav(false);
	};

	const setSecondayNavColor = () => {
		activeSecondColorNav === true && setChangeColorNav(true);
	};

	activeSecondColorNav === false &&
		window.addEventListener('scroll', changeBackgroundColorNav);

	/* Al this props in Nav allow handle the change of background color and font color of nav bar
    when the user scroll */

	return (
		<>
			<Nav
				backColor={changeColorNav && '#fff'}
				titleColor={changeColorNav && `${neutralColor.neutral900}`}
				fontColor={changeColorNav && `${neutralColor.neutral800}`}
				iconUserColor={changeColorNav && `${neutralColor.neutral700}`}
				scrollShadow={changeColorNav && `${shadownLG}`}
			>
				<Logo logoColor={!changeColorNav && 'changeToWhite'} />
				<Ul>
					<Li
						backgroundActiveColor={changeColorNav && 'changeToGreen'}
						activeColor={changeColorNav && 'changeToGreen'}
						hoverTextColor={changeColorNav && 'changeColorHover'}
					>
						<NavLink to='/'>
							{({ isActive }) => (
								<LinkBox className={isActive ? 'active' : ''}>
									<MenuIcons icon={faHouseChimney} />
									<FooterText>Inicio</FooterText>
								</LinkBox>
							)}
						</NavLink>
					</Li>
					<Li off hoverTextColor={changeColorNav && 'changeColorHover'}>
						<FooterText>Tarjetas</FooterText>
					</Li>
					<Li
						backgroundActiveColor={changeColorNav && 'changeToGreen'}
						activeColor={changeColorNav && 'changeToGreen'}
						hoverTextColor={changeColorNav && 'changeColorHover'}
					>
						<NavLink to='/transference'>
							{({ isActive }) => (
								<LinkBox className={isActive ? 'active' : ''}>
									<MenuIcons icon={faRightLeft} />
									<FooterText>Transacciones</FooterText>
								</LinkBox>
							)}
						</NavLink>
					</Li>
					<Li>
						<LinkBox onClick={openResponsiveNav}>
							<UserBox>
								<UserImage
									src={
										userImage && userImage !== 'img-deleted'
											? `${userImage}`
											: noUserImage
									}
								></UserImage>
								<UserIcon icon={faCaretDown} />
							</UserBox>
							<UserName>{name}</UserName>
						</LinkBox>
						{responsiveNav && (
							<DesktopDropdownNav>
								<UlMobile>
									<LiMobile>
										<Link to='/configuration'>
											<Span>
												<ParagraphMedium2>Configuración</ParagraphMedium2>
											</Span>
										</Link>
									</LiMobile>
									<LiMobile>
										<Span>
											<ParagraphMedium2>Ayuda</ParagraphMedium2>
										</Span>
									</LiMobile>
									<LiMobile>
										<CloseSessionPopup
											action={
												<Span ref={ref}>
													<ParagraphSemibold2>Cerrar sesión</ParagraphSemibold2>
												</Span>
											}
										></CloseSessionPopup>
									</LiMobile>
								</UlMobile>
							</DesktopDropdownNav>
						)}
					</Li>
				</Ul>
			</Nav>
			{responsiveNav && (
				<ListMenu>
					<CloseButton propOnClick={closeResponsivenav} />
					<UlMobile>
						<LiMobile offOnDesktop>
							<Span>
								<ParagraphMedium2>Tarjetas</ParagraphMedium2>
								<ArrowIcon icon={faAngleRight}></ArrowIcon>
							</Span>
						</LiMobile>
						<LiMobile offOnDesktop>
							<Link to='/transference'>
								<Span>
									<ParagraphMedium2>Transferencias </ParagraphMedium2>
									<ArrowIcon icon={faAngleRight}></ArrowIcon>
								</Span>
							</Link>
						</LiMobile>
						<LiMobile>
							<Link to='/configuration'>
								<Span>
									<ParagraphMedium2>Configuración</ParagraphMedium2>
									<ArrowIcon icon={faAngleRight}></ArrowIcon>
								</Span>
							</Link>
						</LiMobile>
						<LiMobile>
							<Span>
								<ParagraphMedium2>Ayuda</ParagraphMedium2>
								<ArrowIcon icon={faAngleRight}></ArrowIcon>
							</Span>
						</LiMobile>
						<LiMobile>
							<CloseSessionPopup
								action={
									<Span ref={ref}>
										<ParagraphSemibold2>Cerrar sesión</ParagraphSemibold2>
										<ArrowIcon icon={faAngleRight}></ArrowIcon>
									</Span>
								}
							></CloseSessionPopup>
						</LiMobile>
					</UlMobile>
				</ListMenu>
			)}
		</>
	);
};
