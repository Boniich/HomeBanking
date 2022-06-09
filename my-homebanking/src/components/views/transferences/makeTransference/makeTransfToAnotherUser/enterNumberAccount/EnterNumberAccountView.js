import styled from "styled-components";
import { neutralColor } from "../../../../../../theme/colors/colors";
import { HeadingSemiBold5 } from "../../../../../../theme/heading/heading";
import { ParagraphMedium3 } from "../../../../../../theme/paragraph/paragraph";
import { shadownMD, shadownXS } from "../../../../../../theme/shadown/shadown";
import { SecondaryNav } from "../../../../../common/navs/secondaryNav/SecondaryNav";
import noUserImage from "../../../../../../assets/noUserImage.png";
import { UserResult } from "../../commonTransferenceComponents/userResult/UserResult";
const EnterNumberSection = styled.section`
  display: flex;
  justify-content: center;
`;

const EnterNumberContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 40px;
  gap: 24px;

  ${HeadingSemiBold5} {
    color: ${neutralColor.neutral600};
    font-weight: 600;
  }
`;

const EnterNumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${ParagraphMedium3} {
    color: ${neutralColor.neutral700};
    padding-left: 4px;
  }
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 54px;
  padding: 0px 16px;
  background: #fff;
  border: 1px solid ${neutralColor.neutral400};
  font-size: 16px;
  line-height: 150%;
  color: ${neutralColor.neutral800};
  border-radius: 8px;
  outline: none;

  ::placeholder {
    font-size: 16px;
    line-height: 150%;
    color: ${neutralColor.neutral400};
  }
`;

const UserNotFoundContainer = styled.div`
  padding: 16px;
  background: ${neutralColor.neutral100};
  border-radius: 8px;

  ${ParagraphMedium3} {
    color: ${neutralColor.neutral800};
  }
`;

const EnterNumberContainer = styled.div`
  width: 312px;
  height: auto;
  background: #fff;
  box-shadow: ${shadownXS};
  border-radius: 16px;
  margin-top: 40px;

  @media screen and (min-width: 744px) {
    width: 402px;
    margin-top: 64px;
    box-shadow: ${shadownMD};

    ${EnterNumberContent} {
      padding: 32px 32px 40px;
      gap: 32px;
    }
  }
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${ParagraphMedium3} {
    color: ${neutralColor.neutral500};
  }
`;

export const EnterNumberAccountView = () => {
  const shortNavText = "A otro usuario";
  const largeNavText = "Transferencia a otro usuario";
  return (
    <>
      <SecondaryNav shortNavText={shortNavText} largeNavText={largeNavText} />
      <EnterNumberSection>
        <EnterNumberContainer>
          <EnterNumberContent>
            <HeadingSemiBold5>Enviar Dinero</HeadingSemiBold5>
            <EnterNumberInputContainer>
              <ParagraphMedium3>Numero de cuenta</ParagraphMedium3>
              <SearchInput type="search" placeholder="000-000000000-000" />
            </EnterNumberInputContainer>

            {/* Get a result */}
            <ResultsContainer>
              <ParagraphMedium3>Numero de cuenta</ParagraphMedium3>
              <UserResult />
            </ResultsContainer>

            {/*  User no found */}
            {/* <UserNotFoundContainer>
              <ParagraphMedium3>
                El número de cuenta no pertenece a ningun usuario
              </ParagraphMedium3>
            </UserNotFoundContainer> */}
          </EnterNumberContent>
        </EnterNumberContainer>
      </EnterNumberSection>
    </>
  );
};
