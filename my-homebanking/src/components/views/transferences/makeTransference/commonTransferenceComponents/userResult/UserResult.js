import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../../../../theme/paragraph/paragraph";
import {
  ArrowIconOfUserResult,
  DataUser,
  UserImage,
  UserResultContainer,
} from "./styleUserResult";
import noUserImage from "../../../../../../assets/noUserImage.png";

export const UserResult = ({ ...props }) => {
  return (
    <UserResultContainer
      removeBorder={props.removeBorder}
      removePadding={props.removePadding}
    >
      <UserImage src={noUserImage} />
      <DataUser>
        <ParagraphSemibold2>Darrel Steward</ParagraphSemibold2>
        <ParagraphMedium3>047-567123888-000</ParagraphMedium3>
      </DataUser>
      <ArrowIconOfUserResult
        icon={faAngleRight}
        disableicon={props.disableicon}
      />
    </UserResultContainer>
  );
};
