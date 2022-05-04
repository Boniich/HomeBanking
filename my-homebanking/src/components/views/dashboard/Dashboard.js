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
  ListaItems,
  UserImage,
  LiMobile,
} from "./styleDashBoard";
import {
  faHouseChimney,
  faRightLeft,
  faAngleRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FooterText } from "../../../theme/footer/footer";
import TransferenceView from "./transferences/TransferenceView";
import WelcomeHeader from "./welcomeHeader/WelcomeHeader";
import { useRef, useState } from "react";
import { AccountSummaryView } from "./accountSummary/AccountSummaryView";
import { ArrowIcon, CloseIcon } from "../../../theme/styledIcon/styledIcon";
import fotoPerfil from "../../../assets/fotoPerfil.jpg";
import { Link } from "react-router-dom";
import {
  ParagraphMedium2,
  ParagraphSemibold2,
} from "../../../theme/paragraph/paragraph";
const Dashboard = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);

  const openResponsiveNav = () => {
    setResponsiveNav(true);
    // mala practica pero es una solucion temporal
    document.body.style.overflow = "hidden";
  };

  const closeResponsivenav = () => {
    setResponsiveNav(false);
    document.body.style.overflow = "auto";
  };

  return (
    <Section>
      <WelcomeHeader />
      <UserSection>
        <UserSection2>
          <AccountSummaryView />
          <TransferenceView />
        </UserSection2>
      </UserSection>

      <Nav>
        <Ul>
          <Li>
            <Link to="/dashboard">
              <span>
                <MenuIcons icon={faHouseChimney} />
              </span>
              <span>
                <FooterText>Inicio</FooterText>
              </span>
            </Link>
          </Li>
          <Li>
            <Link to="/transacciones">
              <MenuIcons icon={faRightLeft} />
              <span>
                <FooterText>Transacciones</FooterText>
              </span>
            </Link>
          </Li>
          <Li>
            <span onClick={openResponsiveNav}>
              <UserImage src={fotoPerfil}></UserImage>
              <span>
                <FooterText>Ezequiel</FooterText>
              </span>
            </span>
          </Li>
        </Ul>
      </Nav>
      {responsiveNav && (
        <ListMenu>
          <div className="box-close-btn">
            <span className="span-close-btn">
              <CloseIcon icon={faX} onClick={closeResponsivenav}></CloseIcon>
            </span>
          </div>
          <UlMobile>
            <LiMobile>
              <Span>
                <ParagraphMedium2>Tarjetas</ParagraphMedium2>
                <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </LiMobile>
            <LiMobile>
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
              <Span>
                <ParagraphSemibold2>Cerrar sesión</ParagraphSemibold2>
                <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </LiMobile>
          </UlMobile>
        </ListMenu>
      )}
    </Section>
  );
};

export default Dashboard;
