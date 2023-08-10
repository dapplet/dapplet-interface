import { useState } from 'react';
import { useDeployments } from '../../contracts';
import { useOperatorFacet } from '../../contracts/hooks/OperatorFacet';
import { sortingMethods } from '../../lib/constants/sort';
import { IDappletCard } from '../../lib/types';
import useWindowDimensions from '../../lib/utils/dimensions';
import Filter from '../atoms/Filter';
import Sort from '../atoms/Sort';
import DappletCards from '../organisms/DappletCards';

function Dapplets() {
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

  const sorted = method.name === 'earliest' ? pkgs : pkgs?.reverse();

  /* search */
  const [searchTerm, setSearchTerm] = useState('');

  const dapplets = sorted?.filter((item) => {
    if (
      item?.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.client?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return item;
    }
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
      <DappletCards dapplets={dapplets} />
    </>
  );
}

export default Dapplets;
