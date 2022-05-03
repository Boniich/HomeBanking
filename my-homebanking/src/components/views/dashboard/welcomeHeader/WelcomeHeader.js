import { HeadingSemiBold5 } from "../../../../theme/heading/heading";
import { ParagraphMedium2 } from "../../../../theme/paragraph/paragraph";
import { BoxUser } from "./StyleWelcomeHeader";

const WelcomeHeader = () => {
  return (
    <BoxUser>
      <div className="box1">
        <HeadingSemiBold5>Hola, Ezequiel</HeadingSemiBold5>
        <ParagraphMedium2>Bienvenida a tu banca movil</ParagraphMedium2>
      </div>
    </BoxUser>
  );
};

export default WelcomeHeader;
