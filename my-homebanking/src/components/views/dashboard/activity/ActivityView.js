import { useContext } from "react";
import AccountContext from "../../../../context/accountContext/AccountContext";
import { ExistsActivity } from "./existsActivity/ExistsActivity";
import { NonActivityMsg } from "./nonActivityMsg/NonActivityMsg";
import { ActivityContainer } from "./styleActivityView";

const ActivityView = () => {
  const { tranferences } = useContext(AccountContext);

  return (
    <ActivityContainer>
      {tranferences.length > 0 ? (
        <ExistsActivity transferenceData={tranferences} />
      ) : (
        <NonActivityMsg />
      )}
    </ActivityContainer>
  );
};

export default ActivityView;
