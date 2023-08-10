import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import {
  Config,
  DAppProvider,
  Goerli,
  Hardhat,
  Mainnet,
  Sepolia,
} from '@usedapp/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from './components/providers/ThemeProvider';
import { deployment } from './contracts';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
setBasePath(
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.4.0/dist/'
);

const network = Sepolia;
// const network = Hardhat;

export const forking = false;
const fork = network === Hardhat && forking ? Sepolia : network;

const config: Config = {
  readOnlyChainId: fork.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: process.env.REACT_APP_INFURA_ETH_MAINNET_URL!,
    [Goerli.chainId]: process.env.REACT_APP_INFURA_ETH_GOERLI_URL!,
    [Sepolia.chainId]: process.env.REACT_APP_INFURA_ETH_SEPOLIA_URL!,
    [Hardhat.chainId]: 'http://localhost:8545',
    // 1337: 'http://localhost:7545',
  },
  multicallAddresses: {
    [Mainnet.chainId]: deployment('Multicall2', Mainnet.chainId)?.address,
    [Goerli.chainId]: deployment('Multicall2', Goerli.chainId)?.address,
    [Sepolia.chainId]: deployment('Multicall2', Sepolia.chainId)?.address,
    [Hardhat.chainId]: deployment('Multicall2', fork.chainId)?.address,
    // 1337: deployment('Multicall2', 1337)?.address,
  },
  multicallVersion: 2,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <DAppProvider config={config}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DAppProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
