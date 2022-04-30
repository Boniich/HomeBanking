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
  SavingType,
  NumberAccount,
  CopyButton,
  CloseIconNotify,
  ExtendedNotifyString,
  Notify,
} from "./styleDashBoard";
import {
  faHouseChimney,
  faRightLeft,
  faAngleRight,
  faX,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { FooterText } from "../../../theme/footer/footer";
import TransferenceView from "./transferences/TransferenceView";
import WelcomeHeader from "./welcomeHeader/WelcomeHeader";
import {
  ParagraphMedium2,
  ParagraphMedium3,
  ParagraphSemibold3,
} from "../../../theme/paragraph/paragraph";
import { HeadingSemiBold3 } from "../../../theme/heading/heading";
import { Button } from "../../../theme/buttons/buttons";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
const Dashboard = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);
  const numberAccount = 12458745893254;

  const openResponsiveNav = () => {
    setResponsiveNav(true);
  };

  const closeResponsivenav = () => {
    setResponsiveNav(false);
  };

  const showAlert = () => {
    toast.dismiss();
    toast(
      (t) => (
        <Notify>
          Número de cuenta copiado{" "}
          <ExtendedNotifyString> en el porta papeles</ExtendedNotifyString>
          <CloseIconNotify icon={faX} onClick={() => toast.dismiss(t.id)} />
        </Notify>
      ),
      {
        style: {
          minWidth: "200px",
          maxWidth: "100%",
        },
      },
      {
        duration: 2000,
      }
    );
  };

  return (
    <Section>
      <WelcomeHeader />
      <UserSection>
        <UserSection2>
          <AccountSummary>
            <AccountSummaryContent>
              {/* el tipo de ahorro cambia segun lo seleccionado*/}
              <SavingType>
                <ParagraphMedium3>Ahorro en Dolares</ParagraphMedium3>
                <ParagraphSemibold3>Cambiar</ParagraphSemibold3>
              </SavingType>
              <HeadingSemiBold3>$200.00</HeadingSemiBold3>
              <NumberAccount>
                <ParagraphMedium2>{numberAccount}</ParagraphMedium2>
                <CopyToClipboard text={numberAccount}>
                  <CopyButton icon={faCopy} onClick={showAlert} />
                </CopyToClipboard>
                <Toaster
                  position="bottom-center"
                  containerStyle={{
                    bottom: 75,
                  }}
                  toastOptions={{
                    style: {
                      background: "#0EA5E9",
                      color: "#FFFF",
                    },
                  }}
                />
              </NumberAccount>
              <Button>Enviar Dinero</Button>
            </AccountSummaryContent>
          </AccountSummary>
          <TransferenceView />
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
