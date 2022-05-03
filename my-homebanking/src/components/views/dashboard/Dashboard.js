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
import { useState } from "react";
import { AccountSummaryView } from "./accountSummary/AccountSummaryView";
import { ArrowIcon, CloseIcon } from "../../../theme/styledIcon/styledIcon";
import fotoPerfil from "../../../assets/fotoPerfil.jpg";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);

  const openResponsiveNav = () => {
    setResponsiveNav(true);
  };

  const closeResponsivenav = () => {
    setResponsiveNav(false);
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
            <UserImage src={fotoPerfil}></UserImage>
            <span>
              <FooterText onClick={openResponsiveNav}>Ezequiel</FooterText>
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
            <Li>
              <Span>
                <ListaItems>Tarjetas</ListaItems>
                <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </Li>
            <Li>
              <Span>
                Transferencias <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </Li>
            <Li>
              <Span>
                Configuración <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </Li>
            <Li>
              <Span>
                Ayuda <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </Li>
            <Li>
              <Span>
                Cerrar sesión <ArrowIcon icon={faAngleRight}></ArrowIcon>
              </Span>
            </Li>
          </UlMobile>
        </ListMenu>
      )}
    </Section>
  );
};

export default Dashboard;
