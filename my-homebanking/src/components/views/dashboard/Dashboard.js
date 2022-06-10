import React from "react";
import { UserSection, UserContent } from "./styleDashBoard";
import WelcomeHeader from "./welcomeHeader/WelcomeHeader";
import { AccountSummaryView } from "./accountSummary/AccountSummaryView";
import { CardList } from "./cardList/CardList";
import ActivityView from "./activity/ActivityView";
import { PrimaryNav } from "../../common/navs/primaryNav/PrimaryNav";
const Dashboard = () => {
  return (
    <>
      <WelcomeHeader />
      <UserSection>
        <UserContent>
          <div>
            <AccountSummaryView />
            <CardList />
          </div>
          <ActivityView />
        </UserContent>
      </UserSection>
      <PrimaryNav activeSecondColorNav={false} />
    </>
  );
};

export default Dashboard;
