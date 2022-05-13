import { ExistsActivity } from "./existsActivity/ExistsActivity";
import { NonActivityMsg } from "./nonActivityMsg/NonActivityMsg";
import { ActivityContainer } from "./styleActivityView";

const ActivityView = () => {
  const transferenceMockData = [
    {
      id: 1,
      amount: 120,
      motive: "Deuda",
      date: "2022-03-01",
    },
    {
      id: 2,
      amount: 150,
      motive: "Deuda 2",
      date: "2022-03-01",
    },
    {
      id: 3,
      amount: 500,
      motive: "Deuda 3",
      date: "2022-03-01",
    },
    {
      id: 4,
      amount: 500,
      motive: "Deuda 4",
      date: "2022-03-01",
    },
    {
      id: 5,
      amount: 500,
      motive: "Deuda 5",
      date: "2022-03-01",
    },
    {
      id: 6,
      amount: 500,
      motive: "Deuda 6",
      date: "2022-03-01",
    },
    {
      id: 7,
      amount: 500,
      motive: "Deuda 7",
      date: "2022-03-01",
    },
    {
      id: 8,
      amount: 500,
      motive: "Deuda 8",
      date: "2022-03-01",
    },
  ];

  return (
    <ActivityContainer>
      {transferenceMockData.length > 0 ? (
        <ExistsActivity transferenceMockData={transferenceMockData} />
      ) : (
        <NonActivityMsg />
      )}
    </ActivityContainer>
  );
};

export default ActivityView;
