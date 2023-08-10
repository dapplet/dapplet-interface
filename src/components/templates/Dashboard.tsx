import {
  SlCard,
  SlTab,
  SlTabGroup,
  SlTabPanel,
} from '@shoelace-style/shoelace/dist/react';
import Dapplets from './Dapplets';
import Dapps from './Dapps';

const Dashboard = () => {
  return (
    <div className="flex w-full justify-center">
      {/* left main panel */}
      <SlCard className="dashboard-main-panel">
        <SlTabGroup className="dashboard-tabs">
          <SlTab slot="nav" panel="general">
            Dapplets
          </SlTab>
          <SlTab slot="nav" panel="custom">
            Dapps
          </SlTab>
          <SlTabPanel name="general">
            <Dapplets />
          </SlTabPanel>
          <SlTabPanel name="custom">
            <Dapps />
          </SlTabPanel>
        </SlTabGroup>
      </SlCard>
    </div>
  );
};

export default Dashboard;
