import {
  Li,
  ListMenu,
  MenuIcons,
  Nav,
  Section,
  Ul,
  Link,
  BoxUser,
  UlMobile,
  Span,
  ArrowIcon,
  CloseIcon,
} from "./styleDashBoard";
import {
  faHouseChimney,
  faRightLeft,
  faAngleRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FooterText } from "../../../theme/footer/footer";
import { HeadingSemiBold5 } from "../../../theme/heading/heading";
import { ParagraphMedium2, ParagraphMedium3, ParagraphSemibold2 } from "../../../theme/paragraph/paragraph";
import TransferenceView from "./transferences/TransferenceView";
const Dashboard = () => {
  return (
    <Section>
      <BoxUser>
        <div className="box1">
          <HeadingSemiBold5>Hola, Darlene</HeadingSemiBold5>
          <ParagraphMedium2>Bienvenida a tu banca movil</ParagraphMedium2>
        </div>
      </BoxUser>
      <TransferenceView/>
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
                <FooterText>User</FooterText>
              </span>
            </Link>
          </Li>
        </Ul>
      </Nav>
      {/* <ListMenu>
                    <div className="box-close-btn">
                        <span className="span-close-btn">
                        <CloseIcon icon={faX}></CloseIcon>
                        </span>
                    </div>
                    <UlMobile>
    
                        <Li><Span>Tarjetas <ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                        <Li><Span>Transferencias <ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                        <Li><Span>Configuración <ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                        <Li><Span>Ayuda <ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                        <Li><Span>Cerrar sesión <ArrowIcon icon={faAngleRight}></ArrowIcon></Span></Li>
                    </UlMobile>
                    
                </ListMenu> */}
    </Section>
  );
};

export default Dashboard;
