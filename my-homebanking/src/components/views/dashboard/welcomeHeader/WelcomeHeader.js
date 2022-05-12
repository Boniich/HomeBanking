import { HeadingSemiBold5 } from "../../../../theme/heading/heading";
import { ParagraphMedium2 } from "../../../../theme/paragraph/paragraph";
import { WelcomeUserContainer, WelcomeUserTexs } from "./StyleWelcomeHeader";

const WelcomeHeader = () => {
  return (
    <WelcomeUserContainer>
      <WelcomeUserTexs>
        <HeadingSemiBold5>Hola, Ezequiel</HeadingSemiBold5>
        <ParagraphMedium2>Bienvenida a tu banca movil</ParagraphMedium2>
      </WelcomeUserTexs>
    </WelcomeUserContainer>
  );
};

export default WelcomeHeader;
