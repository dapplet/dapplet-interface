import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { useState } from 'react';
import { useDeployments } from '../../contracts';
import { useDappsFacet } from '../../contracts/hooks/DappsFacet';
import { sortingMethods } from '../../lib/constants/sort';
import { IDappCard } from '../../lib/types';
import useWindowDimensions from '../../lib/utils/dimensions';
import Filter from '../atoms/Filter';
import Sort from '../atoms/Sort';
import DappCards from '../organisms/DappCards';

function Dapps() {
  const { account } = useEthers();
  const diamond = useDeployments('Diamond')?.address;
  const { value: clientRoleGranted } =
    useDappsFacet.events.RoleGranted(diamond, [
      ethers.utils.keccak256(ethers.utils.toUtf8Bytes('basic')),
      null,
      null,
    ]) || {};

  const clients = clientRoleGranted?.map((client) => {
    if (client?.removed) return null;
    return {
      address: client?.data?.account,
      block: client?.blockNumber,
    };
  }) as IDappCard[] | null;
  const [method, setMethod] = useState(sortingMethods[0]);
  const sorted = method.name === 'earliest' ? clients : clients?.reverse();

  const [searchTerm, setSearchTerm] = useState('');

  const dapps = sorted?.filter((item) => {
    return item?.address.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const { width } = useWindowDimensions();

  return (
    <>
      <div
        className={`flex items-center p-4 gap-3 w-full ${
          width < 768 ? 'justify-center' : 'justify-between'
        }`}
      >
        <Filter term={searchTerm} filter={setSearchTerm} />
        <Sort method={method} setMethod={setMethod} />
      </div>
      <DappCards dapps={dapps} isOwned={false} />
    </>
  );
}

export default Dapps;
