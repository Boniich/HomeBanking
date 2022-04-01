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
  ActivityContainer,
  ActivityContainer2,
  CardTransfContainer,
  FigureTransf,
  TransfInfo,
  Divider,
  Transf,
  AllActivityBox,
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
const Dashboard = () => {
  return (
    <Section>
      <BoxUser>
        <div className="box1">
          <HeadingSemiBold5>Hola, Darlene</HeadingSemiBold5>
          <ParagraphMedium2>Bienvenida a tu banca movil</ParagraphMedium2>
        </div>
      </BoxUser>
      <ActivityContainer>
        {/* cambiar nombre del div mas adelante */}
        <ActivityContainer2>
          <ParagraphMedium2>Actividades Recientes</ParagraphMedium2>
          <CardTransfContainer>
            <Transf>
            <FigureTransf>
              <TransfInfo>
              <ParagraphSemibold2>Transf Web</ParagraphSemibold2>
              <ParagraphMedium3>08 Ene.2022 - 04:21pm</ParagraphMedium3>
              </TransfInfo>
              <ParagraphSemibold2>-50</ParagraphSemibold2>
            </FigureTransf>
            <div><Divider/></div>
            </Transf>

            <Transf>
            <FigureTransf>
              <TransfInfo>
              <ParagraphSemibold2>Transf Web</ParagraphSemibold2>
              <ParagraphMedium3>08 Ene.2022 - 04:21pm</ParagraphMedium3>
              </TransfInfo>
              <ParagraphSemibold2>-50</ParagraphSemibold2>
            </FigureTransf>
            <div><Divider/></div>
            </Transf>

            <Transf>
            <FigureTransf>
              <TransfInfo>
              <ParagraphSemibold2>Transf Web</ParagraphSemibold2>
              <ParagraphMedium3>08 Ene.2022 - 04:21pm</ParagraphMedium3>
              </TransfInfo>
              <ParagraphSemibold2>-50</ParagraphSemibold2>
            </FigureTransf>
            <div><Divider/></div>
            </Transf>

            <Transf>
            <FigureTransf>
              <TransfInfo>
              <ParagraphSemibold2>Transf Web</ParagraphSemibold2>
              <ParagraphMedium3>08 Ene.2022 - 04:21pm</ParagraphMedium3>
              </TransfInfo>
              <ParagraphSemibold2>-50</ParagraphSemibold2>
            </FigureTransf>
            <div><Divider/></div>
            </Transf>

            <Transf>
            <FigureTransf>
              <TransfInfo>
              <ParagraphSemibold2>Transf Web</ParagraphSemibold2>
              <ParagraphMedium3>08 Ene.2022 - 04:21pm</ParagraphMedium3>
              </TransfInfo>
              <ParagraphSemibold2>-50</ParagraphSemibold2>
            </FigureTransf>
            <div><Divider/></div>
            </Transf>

            <Transf>
            <FigureTransf>
              <TransfInfo>
              <ParagraphSemibold2>Transf Web</ParagraphSemibold2>
              <ParagraphMedium3>08 Ene.2022 - 04:21pm</ParagraphMedium3>
              </TransfInfo>
              <ParagraphSemibold2>-50</ParagraphSemibold2>
            </FigureTransf>
            <div><Divider/></div>
            </Transf>

            <Transf>
            <FigureTransf>
              <TransfInfo>
              <ParagraphSemibold2>Transf Web</ParagraphSemibold2>
              <ParagraphMedium3>08 Ene.2022 - 04:21pm</ParagraphMedium3>
              </TransfInfo>
              <ParagraphSemibold2>-50</ParagraphSemibold2>
            </FigureTransf>
            <div><Divider/></div>
            </Transf>

            <Transf>
            <FigureTransf>
              <TransfInfo>
              <ParagraphSemibold2>Transf Web</ParagraphSemibold2>
              <ParagraphMedium3>08 Ene.2022 - 04:21pm</ParagraphMedium3>
              </TransfInfo>
              <ParagraphSemibold2>-50</ParagraphSemibold2>
            </FigureTransf>
            <div><Divider/></div>
            </Transf>

            
          </CardTransfContainer>

          

          <AllActivityBox>
          <ParagraphMedium2>Ver toda la actividad</ParagraphMedium2>
          </AllActivityBox>
            

        </ActivityContainer2>
      </ActivityContainer>

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
