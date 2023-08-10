import { SlOption } from '@shoelace-style/shoelace/dist/react';
import { shortenAddress } from '@usedapp/core';
import { useDeployments } from '../../contracts';
import { useDappletsFacet } from '../../contracts/hooks/DappletsFacet';
import { useClientStore } from '../../lib/stores/client';
import Jazzicon from '../atoms/Jazzicon';

function DiamondSelectOption({
  client,
  pkg,
}: {
  client: string;
  pkg?: string;
}) {
  const clientStore = useClientStore();

  // get client's installed dapplets
  const system = useDeployments('Diamond')?.address;
  const { value: installs } =
    useDappletsFacet.installedBy(system, [client || '']) || {};
  const installed = pkg && installs?.[0].includes(pkg);

  return (
    <SlOption
      value={client}
      onClick={() => clientStore.select(client)}
      selected={false}
    >
      <div className="flex flex-row gap-2 items-center">
        <div className="jazzicon-ctr">
          <Jazzicon address={client} />
        </div>
        <div>{shortenAddress(client)}</div>{' '}
        {installed && <em slot="suffix">{`(installed)`}</em>}
      </div>
    </SlOption>
  );
}

export default DiamondSelectOption;
