import { SlAlert, SlIcon } from '@shoelace-style/shoelace/dist/react';

function WalletDisconnected() {
  return (
    <SlAlert variant="warning" open className="alert">
      <SlIcon slot="icon" name="exclamation-triangle" />
      <strong>Wallet disconnected</strong>
      <br />
      Please connect to continue.
    </SlAlert>
  );
}

export default WalletDisconnected;
