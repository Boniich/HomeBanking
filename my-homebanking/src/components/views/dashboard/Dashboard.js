import {
  Li,
  ListMenu,
  MenuIcons,
  Nav,
  Section,
  Ul,
  Link,
  UlMobile,
  Span,
  ArrowIcon,
  CloseIcon,
  AccountSummary,
  AccountSummaryContent,
  UserSection,
  UserSection2,
  ListaItems,
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
import { ParagraphMedium3 } from "../../../theme/paragraph/paragraph";
import { HeadingSemiBold3 } from "../../../theme/heading/heading";
import { Button } from "../../../theme/buttons/buttons";
import { useState } from "react";
const Dashboard = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);

  const openResponsiveNav = () =>{
    setResponsiveNav(true);
  }

  const closeResponsivenav = () =>{
    setResponsiveNav(false);
  }

  return (
    <Section>
      <WelcomeHeader />
    <UserSection> 
    <UserSection2>
    <AccountSummary>
        <AccountSummaryContent>
          <ParagraphMedium3>Saldo Disponible</ParagraphMedium3>
          <HeadingSemiBold3>$200.00</HeadingSemiBold3>
          <Button>Enviar Dinero</Button>
          </AccountSummaryContent>
        </AccountSummary>
      <TransferenceView/>
    </UserSection2>
    </UserSection>

      <Nav>
        <Ul>
          <Li>
            <Link>
              <span>
                <MenuIcons icon={faHouseChimney} />
              </span>
              <span>
                <FooterText>Inicio</FooterText>
              </span>
            </Link>
          </Li>
          <Li>
            <Link>
              <MenuIcons icon={faRightLeft} />
              <span>
                <FooterText>Transacciones</FooterText>
              </span>
            </Link>
          </Li>
          <Li>
            <Link>
              Iconito
              <span>
                <FooterText onClick={openResponsiveNav}>User</FooterText>
              </span>
            </Link>
          </Li>
        </Ul>
      </Nav>
      {responsiveNav &&
      <ListMenu>
                    <div className="box-close-btn">
                        <span className="span-close-btn">
                        <CloseIcon icon={faX} onClick={closeResponsivenav}></CloseIcon>
                        </span>
                    </div>
                    <UlMobile>
    
                        <Li><Span><ListaItems>Tarjetas</ListaItems><ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                        <Li><Span>Transferencias <ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                        <Li><Span>Configuración <ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                        <Li><Span>Ayuda <ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                        <Li><Span>Cerrar sesión <ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                    </UlMobile>
                    
                </ListMenu>}
    </Section>
  );
};

export default Dashboard;
