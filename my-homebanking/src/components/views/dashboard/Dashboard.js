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
} from "./styleDashBoard";
import {
  faHouseChimney,
  faRightLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FooterText } from "../../../theme/footer/footer";
import WelcomeHeader from "./welcomeHeader/WelcomeHeader";
import { useState } from "react";
import { AccountSummaryView } from "./accountSummary/AccountSummaryView";
import { ArrowIcon } from "../../../theme/styledIcon/styledIcon";
import fotoPerfil from "../../../assets/fotoPerfil.jpg";
import { Link } from "react-router-dom";
import {
  ParagraphMedium2,
  ParagraphSemibold2,
} from "../../../theme/paragraph/paragraph";
import { CloseButton } from "../../common/closeButton/CloseButton";
import { CardList } from "./cardList/CardList";
import ActivityView from "./activity/ActivityView";
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
          <div>
            <AccountSummaryView />
            <CardList />
          </div>
          <ActivityView />
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
          <CloseButton propOnClick={closeResponsivenav} />
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
