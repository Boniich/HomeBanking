import styled from "styled-components";
import { neutralColor } from "../../../../theme/colors/colors";
import { HeadingBold5 } from "../../../../theme/heading/heading";
import { PrimaryNav } from "../../../common/navs/primaryNav/PrimaryNav";
import ActivityView from "../../dashboard/activity/ActivityView";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  @media screen and (min-width: 1512px) {
    margin-top: 164px;
  }
`;

const TransferenceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${HeadingBold5} {
    font-weight: 600;
    color: ${neutralColor.neutral800};
  }
`;

export const ShowTransferences = () => {
  return (
    <>
      <PrimaryNav activeSecondColorNav={true} />
      <Section>
        <TransferenceContent>
          <HeadingBold5>Transacciones</HeadingBold5>
          <ActivityView desktopWidth="766px" />
        </TransferenceContent>
      </Section>
    </>
  );
};
