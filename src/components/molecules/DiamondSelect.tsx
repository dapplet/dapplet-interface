import { SlSelect } from '@shoelace-style/shoelace/dist/react';
import { useEthers } from '@usedapp/core';
import { useDeployments } from '../../contracts';
import { useDappsFacet } from '../../contracts/hooks/DappsFacet';
import DiamondSelectOption from '../atoms/DiamondSelectOption';
import NoDappsFound from '../atoms/alerts/NoDappsFound';
import WalletDisconnected from '../atoms/alerts/WalletDisconnected';

function DiamondSelect({
  pkg,
  required,
}: {
  pkg?: string;
  required?: boolean;
}) {
  const diamond = useDeployments('Diamond')?.address;
  const { account } = useEthers();

  //get created clients
  const { value: ownedClients } =
    useDappsFacet.events.RoleGranted(diamond, [null, null, account]) || {};

  return (
    <>
      {account && ownedClients && ownedClients.length > 0 ? (
        <SlSelect placeholder="Select a Dapp" required={required}>
          {ownedClients?.map((client, i) => (
            <DiamondSelectOption
              key={i}
              client={client.data.account}
              pkg={pkg}
            />
          ))}
        </SlSelect>
      ) : (
        <>{account ? <NoDappsFound /> : <WalletDisconnected />}</>
      )}
    </>
  );
}

export default DiamondSelect;
