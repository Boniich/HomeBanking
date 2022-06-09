import { useState } from "react";
import styled from "styled-components";
import { ButtonsContainer } from "../../../theme/buttons/buttonContainer/buttonContainer";
import { ConfigButton } from "../../../theme/buttons/buttons";
import { ParagraphMedium3 } from "../../../theme/paragraph/paragraph";
import { shadownMD } from "../../../theme/shadown/shadown";
import { SecondaryNav } from "../../common/navs/secondaryNav/SecondaryNav";
import nouUserImage from "../../../assets/noUserImage.png";
import { errorColor, neutralColor } from "../../../theme/colors/colors";
const ConfigurationSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 40px;

  @media screen and (min-width: 744px) {
    gap: 48px;
  }
`;

const ConfigurationForm = styled.form`
  width: 272px;
  height: auto;
  background: #fff;
  box-shadow: ${shadownMD};
  border-radius: 16px;
  padding: 32px 20px;

  @media screen and (min-width: 744px) {
    padding: 40px 32px;
    /* original width: 504px - 64px (padding-left-right) = 440px (width)*/
    width: 440px;
  }
`;

const ConfigurationContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ChangeImageContent = styled.div`
  display: flex;
  gap: 16px;
`;

const Image = styled.img`
  width: 54px;
  height: 54px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 100%;
`;

const ImageButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ChangeImageButton = styled(ConfigButton)`
  width: 104px;
  border-radius: 8px;
  color: ${neutralColor.neutral800};
`;

const DeleteImageButton = styled(ConfigButton)`
  padding: 12px;
  width: 76px;
  border-radius: 8px;
  color: ${errorColor.error600};
`;

export const ConfigurationView = () => {
  const [switchSection, setSwitchSection] = useState({
    personalData: true,
    accountData: false,
  });
  const uniqueString = "Configuración";

  const changeToAccountData = () => {
    setSwitchSection({ personalData: false, accountData: true });
  };

  const changeToPersonalData = () => {
    setSwitchSection({ personalData: true, accountData: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <SecondaryNav shortNavText={uniqueString} largeNavText={uniqueString} />
      <ConfigurationSection>
        <ButtonsContainer>
          <ConfigButton
            onClick={changeToPersonalData}
            switchBackground={switchSection.personalData}
            switchColor={switchSection.personalData}
            switchFontWeight={switchSection.personalData}
            switchBorder={switchSection.personalData}
          >
            Datos Personales
          </ConfigButton>
          <ConfigButton
            onClick={changeToAccountData}
            switchBackground={switchSection.accountData}
            switchColor={switchSection.accountData}
            switchFontWeight={switchSection.accountData}
            switchBorder={switchSection.accountData}
          >
            Cambiar password
          </ConfigButton>
        </ButtonsContainer>
        <ConfigurationForm onSubmit={handleSubmit}>
          <ConfigurationContent>
            <ChangeImageContainer>
              <ParagraphMedium3>Avatar</ParagraphMedium3>
              <ChangeImageContent>
                <Image src={nouUserImage} />
                <ImageButtonsContainer>
                  <ChangeImageButton>Cambiar</ChangeImageButton>
                  <DeleteImageButton switchBorder={true}>
                    Eliminar
                  </DeleteImageButton>
                </ImageButtonsContainer>
              </ChangeImageContent>
            </ChangeImageContainer>
          </ConfigurationContent>
        </ConfigurationForm>
      </ConfigurationSection>
    </>
  );
};
