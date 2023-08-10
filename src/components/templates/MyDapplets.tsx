import { useState } from 'react';
import { useDeployments } from '../../contracts';
import { useOperatorFacet } from '../../contracts/hooks/OperatorFacet';
import { sortingMethods } from '../../lib/constants/sort';
import { IDappletCard } from '../../lib/types';
import Sort from '../atoms/Sort';
import DappletCards from '../organisms/DappletCards';

function MyDapplets() {
  const diamond = useDeployments('Diamond')?.address;
  const { value: created } =
    useOperatorFacet.events.PackageCreated(diamond, []) || {};

  const pkgs = created?.map((pkg) => {
    if (pkg?.removed) return null;
    return {
      address: pkg?.data?.pkg,
      client: pkg?.data?.client,
      block: pkg?.blockNumber,
    };
  }) as IDappletCard[] | null;

  const [method, setMethod] = useState(sortingMethods[0]);

  const dapplets = method.name === 'earliest' ? pkgs : pkgs?.reverse();

  return (
    <>
      <div className="flex justify-between items-center p-4 gap-3">
        <h2>Dapplets</h2>
        <Sort method={method} setMethod={setMethod} />
      </div>
      <DappletCards dapplets={dapplets} />
    </>
  );
}

export default MyDapplets;
