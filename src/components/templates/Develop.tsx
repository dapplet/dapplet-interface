import { SlCard, SlDivider } from '@shoelace-style/shoelace/dist/react';
import MyDapplets from './MyDapplets';

const App = () => {
  return (
    <div className="flex w-full justify-center">
      {/* left main panel */}
      <div className="dashboard-main-panel" style={{ maxWidth: '70rem' }}>
        <SlCard>
          <h2 slot="header">Develop</h2>
          <div className="flex flex-col text-bold gap-2 justify-center">
            <div className="w-full">
              <h3>Coming Soon: Use the CLI to build your Dapplet!</h3> <br />
              🏗️ Dapplet-CLI is designed to work in any local environment,
              whether inside your Hardhat or Foundry project. <br />
              <br />
              🧱 Publish to the Dapplet Directory - Share your dapp in one
              simple process! <br />
              <br />
              🥏 Fetch existing contract code - Download any sourcify-verified
              contract source-code with one simple command. <br />
              <br />
            </div>
          </div>
        </SlCard>
      </div>
    </div>
  );
};

export default App;
