import React from "react";
import { Section, UserSection, UserSection2 } from "./styleDashBoard";
import WelcomeHeader from "./welcomeHeader/WelcomeHeader";
import { AccountSummaryView } from "./accountSummary/AccountSummaryView";
import { CardList } from "./cardList/CardList";
import ActivityView from "./activity/ActivityView";
import { PrimaryNav } from "../../common/navs/primaryNav/PrimaryNav";
const Dashboard = () => {
  return (
    <Section>
      <WelcomeHeader />
      <UserSection>
        <UserSection2>
          <div>
            <AccountSummaryView />
            <CardList />
          </div>
          <ActivityView />
        </UserSection2>
      </UserSection>
      <PrimaryNav activeSecondColorNav={false} />
    </Section>
  );
};

export default Dashboard;
