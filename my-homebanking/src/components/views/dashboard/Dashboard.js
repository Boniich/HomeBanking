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
} from "./styleDashBoard";
import {
  faHouseChimney,
  faRightLeft,
  faAngleRight,
  faCaretDown,
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
import { neutralColor } from "../../../theme/colors/colors";
import { shadownLG } from "../../../theme/shadown/shadown";
import { CloseSessionPopup } from "../../common/closeSessionPopup/CloseSessionPopup";
import { AccountProvider } from "../../../context/accountContext/AccountContext";
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
      <AccountProvider>
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
                <CloseSessionPopup text="¿Desea cerrar la session?">
                  <Span ref={ref}>
                    <ParagraphSemibold2>Cerrar sesión</ParagraphSemibold2>
                    <ArrowIcon icon={faAngleRight}></ArrowIcon>
                  </Span>
                </CloseSessionPopup>
              </LiMobile>
            </UlMobile>
          </ListMenu>
        )}
      </AccountProvider>
    </Section>
  );
};

export default Dashboard;
