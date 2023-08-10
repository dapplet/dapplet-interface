import { SlCard } from '@shoelace-style/shoelace/dist/react';
import StakeForm from '../organisms/StakeForm';

const App = () => {
  return (
    <div className="flex w-full justify-center">
      {/* left main panel */}
      <div className="dashboard-main-panel">
        <SlCard>
          <div className="flex justify-between">
            <h2>Stake</h2>
          </div>
          <StakeForm pkg={''} />
        </SlCard>
      </div>
    </div>
  );
};

export default App;
