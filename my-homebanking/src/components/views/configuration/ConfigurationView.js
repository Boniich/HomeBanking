import { useState } from "react";
import styled from "styled-components";
import { ButtonsContainer } from "../../../theme/buttons/buttonContainer/buttonContainer";
import { Button, ConfigButton } from "../../../theme/buttons/buttons";
import { ParagraphMedium3 } from "../../../theme/paragraph/paragraph";
import { shadownMD } from "../../../theme/shadown/shadown";
import { SecondaryNav } from "../../common/navs/secondaryNav/SecondaryNav";
import nouUserImage from "../../../assets/noUserImage.png";
import { errorColor, neutralColor } from "../../../theme/colors/colors";
import { InputContainer } from "../../../theme/inputs/inputContainer/inputContainer";
import { Input } from "../../../theme/inputs/input";
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
  gap: 24px;
`;

const ChangeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${ParagraphMedium3} {
    color: ${neutralColor.neutral700};
  }
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

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SaveChangesButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  margin-top: 8px;

  @media screen and (min-width: 744px) {
    width: 183px;
  }
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
        {/* Form to image, name and last name */}
        {switchSection.personalData ? (
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
              <Box1>
                <InputContainer>
                  <ParagraphMedium3>Nombres</ParagraphMedium3>
                  <Input type="text" />
                </InputContainer>
                <InputContainer>
                  <ParagraphMedium3>Apellidos</ParagraphMedium3>
                  <Input type="text" />
                </InputContainer>
              </Box1>
              <SaveChangesButton>Guardar Cambios</SaveChangesButton>
            </ConfigurationContent>
          </ConfigurationForm>
        ) : (
          <ConfigurationForm onSubmit={handleSubmit}>
            <ConfigurationContent>
              <Box1>
                <InputContainer>
                  <ParagraphMedium3>Email</ParagraphMedium3>
                  <Input type="text" />
                </InputContainer>
                <InputContainer>
                  <ParagraphMedium3>Nueva contraseña</ParagraphMedium3>
                  <Input type="text" />
                </InputContainer>
                <InputContainer>
                  <ParagraphMedium3>Repetir nueva contraseña</ParagraphMedium3>
                  <Input type="text" />
                </InputContainer>
              </Box1>
              <SaveChangesButton>Guardar Cambios</SaveChangesButton>
            </ConfigurationContent>
          </ConfigurationForm>
        )}
      </ConfigurationSection>
    </>
  );
};
