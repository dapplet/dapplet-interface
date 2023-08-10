import { SlDivider } from '@shoelace-style/shoelace/dist/react';
import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { useState } from 'react';
import { useDeployments } from '../../contracts';
import { useDappsFacet } from '../../contracts/hooks/DappsFacet';
import { sortingMethods } from '../../lib/constants/sort';
import { IDappCard } from '../../lib/types';
import Sort from '../atoms/Sort';
import NoDappsFound from '../atoms/alerts/NoDappsFound';
import WalletDisconnected from '../atoms/alerts/WalletDisconnected';
import DappCards from '../organisms/DappCards';

function MyDapps() {
  const { account } = useEthers();
  const diamond = useDeployments('Diamond')?.address;
  const { value: clientRoleGranted } =
    useDappsFacet.events.RoleGranted(diamond, [
      ethers.utils.keccak256(ethers.utils.toUtf8Bytes('basic')),
      null,
      account,
    ]) || {};

  const clients = clientRoleGranted?.map((client) => {
    if (client?.removed) return null;
    return {
      address: client?.data?.account,
      block: client?.blockNumber,
    };
  }) as IDappCard[] | null;

  const [method, setMethod] = useState(sortingMethods[0]);
  const dapps = method.name === 'earliest' ? clients : clients?.reverse();

  return (
    <>
      <SlDivider />
      <div className="flex justify-between items-center p-4 gap-3">
        <h2>My Dapps</h2>
        <Sort method={method} setMethod={setMethod} />
      </div>
      {account && dapps && dapps.length > 0 ? (
        <DappCards dapps={dapps} isOwned={true} />
      ) : (
        <>{account ? <NoDappsFound /> : <WalletDisconnected />}</>
      )}
    </>
  );
}

export default MyDapps;
