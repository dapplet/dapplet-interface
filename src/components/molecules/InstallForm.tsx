import type SlInputElement from '@shoelace-style/shoelace/dist/components/input/input';
import {
  SlButton,
  SlDivider,
  SlInput,
} from '@shoelace-style/shoelace/dist/react';
import { useEthers } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';
import { useMemo, useState } from 'react';
import { useDeployments } from '../../contracts';
import { useDappletsFacet } from '../../contracts/hooks/DappletsFacet';
import { useDappsFacet } from '../../contracts/hooks/DappsFacet';
import { useInstaller } from '../../contracts/hooks/Installer';
import { usePKG } from '../../contracts/hooks/PKG';
import {
  useInitializerCost,
  useMatchABIFunctionsWithSelectors,
} from '../../lib/hooks';
import { costOf } from '../../lib/shared';
import { useClientStore } from '../../lib/stores/client';
import { useContractMetadata } from '../../lib/stores/ipfs';
import HandleError from '../atoms/toasts/HandleError';

function InstallForm({ pkg }: { pkg: string }) {
  const client = useClientStore()?.selected;

  const { send: install, state: install_state } = useInstaller.install(client, {
    gasLimitBufferPercentage: 20,
  });
  const { send: uninstall, state: uininstall_state } = useInstaller.uninstall(
    client,
    {
      gasLimitBufferPercentage: 20,
    }
  );

  const { value: get } = usePKG.get(pkg, [0]) || {};

  // const cuts = get?.cuts || [];
  const initializer = get?.target || '';
  const selector = useMemo(() => {
    return [get?.selector];
  }, [get?.selector]);
  //convert selector to signature. ex: 'init(address,uint256)'

  const initMeta = useContractMetadata(initializer || '');
  const initAbi = useMemo(() => {
    return initMeta?.output?.abi;
  }, [initMeta]);

  const [params, setParams] = useState<any[]>([]);

  const { fragments, iface } =
    useMatchABIFunctionsWithSelectors(initAbi, selector) || {};

  // console.log('asdf init fragments', fragments);
  // console.log('asdf init iface', iface);

  const cost = useInitializerCost(initializer, iface);

  //TODO: make sure the inputs are displaying in the UI, must trigger re-render somehow if its not displaying

  const installCost = useMemo(() => {
    return cost?.add(costOf.install) || costOf.install;
  }, [cost]);

  console.log('asdf install cost', formatEther(installCost));

  // get client's installed dapplets
  const system = useDeployments('Diamond')?.address;
  const { value: installs } =
    useDappletsFacet.installedBy(system, [client || '']) || {};
  //check that it is installed by the current client
  const installed = pkg && installs?.[0].includes(pkg);

  const diamond = useDeployments('Diamond')?.address;
  const { account } = useEthers();
  const { value: ownedClients } =
    useDappsFacet.events.RoleGranted(diamond, [null, null, account]) || {};

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    installed && ownedClients && ownedClients.length > 0
      ? handleUninstall()
      : handleInstall();
  }

  function handleInstall() {
    const calldata =
      (fragments && iface?.encodeFunctionData(fragments?.[0], params)) || '0x';
    install(pkg, calldata, {
      value: cost ? installCost : costOf.install,
    });
  }

  function handleUninstall() {
    uninstall(pkg, '0x');
  }

  //TODO: lazy load for each client selected, for seemless switching between clients
  // -- load installs per client further up tree, pass down as props

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <>
          {client && (
            <>
              {ownedClients && ownedClients.length > 0 && (
                <>
                  {fragments && fragments?.[0]?.inputs && (
                    <>
                      <SlDivider />
                      {fragments?.[0]?.inputs.map((input: any, i: any) => (
                        <div key={i} className="flex flex-col gap-4">
                          <h4>Initializeable values</h4>
                          <SlInput
                            key={i}
                            label={input.name}
                            placeholder={input.name}
                            helpText={input.type}
                            value={params[i] || ''}
                            required
                            onInput={(e) =>
                              setParams((params) => {
                                const newParams = [...params];
                                newParams[i] = (
                                  e.target as SlInputElement
                                ).value;
                                return newParams;
                              })
                            }
                          />
                        </div>
                      ))}
                    </>
                  )}
                  {installCost && (
                    <>
                      <SlDivider />
                      <div className="flex flex-col gap-4">
                        {!installed ? (
                          <h4>Cost to install:</h4>
                        ) : (
                          <h4>Cost to uninstall:</h4>
                        )}
                        <div className="flex flex-col gap-2">
                          <>
                            {cost && (
                              <div className="flex flex-row gap-4 fee-owner">
                                <strong>Owner's cost:</strong>
                                <span> {formatEther(cost)} ETH</span>
                              </div>
                            )}
                          </>
                          <div className="flex flex-row gap-4 fee-staker">
                            <strong>Staker's Fee:</strong>
                            <span> {formatEther(costOf.install)} ETH</span>
                          </div>
                          <div className="flex flex-row gap-4 fee-total">
                            <strong>Total:</strong>
                            <span> {formatEther(installCost)} ETH</span>
                          </div>
                        </div>
                      </div>
                      <SlDivider />
                    </>
                  )}
                </>
              )}
              <SlButton slot="footer" variant="primary" type="submit">
                Install
              </SlButton>
              <SlButton slot="footer" variant="default" type="submit">
                Uninstall
              </SlButton>
            </>
          )}
        </>
      </form>
      <HandleError state={install_state} />
    </>
  );
}

export default InstallForm;
