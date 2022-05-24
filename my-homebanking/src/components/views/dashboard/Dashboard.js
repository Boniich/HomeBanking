import React, { createRef } from "react";
import {
  Li,
  ListMenu,
  MenuIcons,
  Nav,
  Section,
  Ul,
  UlMobile,
  Span,
  UserSection,
  UserSection2,
  UserImage,
  LiMobile,
  LinkBox,
  UserName,
  UserIcon,
  UserBox,
  CloseSessionContent,
  CloseSessionIconAndTexs,
  BackgroundCloseSessionIcon,
  CloseSessionIcon,
  CloseSeccionButtonsContainer,
  CloseSessionButton,
} from "./styleDashBoard";
import {
  faHouseChimney,
  faRightLeft,
  faAngleRight,
  faCaretDown,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FooterText } from "../../../theme/footer/footer";
import WelcomeHeader from "./welcomeHeader/WelcomeHeader";
import { useRef, useState } from "react";
import { AccountSummaryView } from "./accountSummary/AccountSummaryView";
import { ArrowIcon } from "../../../theme/styledIcon/styledIcon";
import fotoPerfil from "../../../assets/fotoPerfil.jpg";
import { NavLink } from "react-router-dom";
import {
  ParagraphMedium2,
  ParagraphSemibold2,
} from "../../../theme/paragraph/paragraph";
import { CloseButton } from "../../common/closeButton/CloseButton";
import { CardList } from "./cardList/CardList";
import ActivityView from "./activity/ActivityView";
import { Logo } from "../../common/logo/Logo";
import { neutralColor, primaryColor } from "../../../theme/colors/colors";
import { shadownLG } from "../../../theme/shadown/shadown";
import { Popup } from "../../common/popup/Popup";
import { HeadingBold5 } from "../../../theme/heading/heading";
const Dashboard = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);
  const [changeColorNav, setChangeColorNav] = useState(false);
  const refNav = useRef(false);
  const ref = createRef();

  const openResponsiveNav = () => {
    setResponsiveNav(!responsiveNav);
    // mala practica pero es una solucion temporal
    const wid = refNav.current.offsetWidth;
    wid >= 1512
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  const closeResponsivenav = () => {
    setResponsiveNav(false);
    document.body.style.overflow = "auto";
  };

  const changeBackgroundColorNav = () => {
    window.scrollY >= 120 ? setChangeColorNav(true) : setChangeColorNav(false);
  };

  window.addEventListener("scroll", changeBackgroundColorNav);

  return (
    <Section>
      <WelcomeHeader />
      <UserSection>
        <UserSection2>
          <div>
            <AccountSummaryView />
            <CardList />
          </div>
          <ActivityView />
        </UserSection2>
      </UserSection>
      {/* Al this props in Nav allow handle the change of background color and font color of nav bar
    when the user scroll */}
      <Nav
        ref={refNav}
        backColor={changeColorNav && "#fff"}
        logoColor={changeColorNav && `${neutralColor.neutral900}`}
        fontColor={changeColorNav && `${neutralColor.neutral800}`}
        iconUserColor={changeColorNav && `${neutralColor.neutral700}`}
        scrollShadow={changeColorNav && `${shadownLG}`}
      >
        <Logo />
        <Ul>
          <Li>
            <NavLink to="/dashboard">
              {({ isActive }) => (
                <LinkBox className={isActive ? "active" : ""}>
                  <MenuIcons icon={faHouseChimney} />
                  <FooterText>Inicio</FooterText>
                </LinkBox>
              )}
            </NavLink>
          </Li>
          <Li off>
            <FooterText>Tarjetas</FooterText>
          </Li>
          <Li>
            <NavLink to="/transacciones">
              {({ isActive }) => (
                <LinkBox className={isActive ? "active" : ""}>
                  <MenuIcons icon={faRightLeft} />
                  <FooterText>Transacciones</FooterText>
                </LinkBox>
              )}
            </NavLink>
          </Li>
          <Li>
            <LinkBox onClick={openResponsiveNav}>
              <UserBox>
                <UserImage src={fotoPerfil}></UserImage>
                <UserIcon icon={faCaretDown} />
              </UserBox>
              <UserName>Ezequiel</UserName>
            </LinkBox>
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
              <Span>
                <ParagraphMedium2>Transferencias </ParagraphMedium2>
                <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </LiMobile>
            <LiMobile>
              <Span>
                <ParagraphMedium2>Configuración</ParagraphMedium2>{" "}
                <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </LiMobile>
            <LiMobile>
              <Span>
                <ParagraphMedium2>Ayuda</ParagraphMedium2>
                <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </LiMobile>
            <LiMobile>
              <Popup
                action={
                  <Span ref={ref}>
                    <ParagraphSemibold2>Cerrar sesión</ParagraphSemibold2>
                    <ArrowIcon icon={faAngleRight}></ArrowIcon>
                  </Span>
                }
                background={neutralColor.neutral700}
                width="316px"
                height="418px"
                tableWidth="544px"
                tableHeight="544px"
                desktopWidth="686px"
                desktopHeight="642px"
              >
                <CloseSessionContent>
                  <CloseSessionIconAndTexs>
                    <BackgroundCloseSessionIcon>
                      <CloseSessionIcon icon={faCircleInfo}></CloseSessionIcon>
                    </BackgroundCloseSessionIcon>
                    <HeadingBold5>
                      ¿Deseas mantener tu session activa?
                    </HeadingBold5>
                  </CloseSessionIconAndTexs>
                  <CloseSeccionButtonsContainer>
                    <CloseSessionButton>Mantener activa</CloseSessionButton>
                    <CloseSessionButton
                      background="#fff"
                      textColor={`${primaryColor.primary500}`}
                      border={`1px solid ${primaryColor.primary500}`}
                      textColorHover={`${primaryColor.primary400}`}
                      backgroundHover="none"
                      borderHover={`${primaryColor.primary400}`}
                      textColorFocus={`${primaryColor.primary500}`}
                      backgroundFocus={`${primaryColor.primary50}`}
                      borderFocus={`${primaryColor.primary200}`}
                    >
                      Cerrar session
                    </CloseSessionButton>
                  </CloseSeccionButtonsContainer>
                </CloseSessionContent>
              </Popup>
            </LiMobile>
          </UlMobile>
        </ListMenu>
      )}
    </Section>
  );
};

export default Dashboard;
