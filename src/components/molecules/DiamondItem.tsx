import { shortenAddress } from '@usedapp/core';

function DiamondItem({ address }: { address: string }) {
  return <div>{shortenAddress(address)}</div>;
}

export default DiamondItem;
