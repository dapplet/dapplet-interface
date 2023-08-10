import {
  SlButton,
  SlDropdown,
  SlMenu,
  SlMenuItem,
} from '@shoelace-style/shoelace/dist/react';
import WalletInfo from '../molecules/WalletInfo';

function ConnectWallet() {
  return (
    <SlDropdown>
      <SlButton slot="trigger" caret variant="primary" outline>
        Connect Wallet
      </SlButton>
      <SlMenu>
        <SlMenuItem className="wallet-container">
          <WalletInfo />
        </SlMenuItem>
      </SlMenu>
    </SlDropdown>
  );
}

export default ConnectWallet;
