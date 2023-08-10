import {
  SlButton,
  SlDivider,
  SlIconButton,
  SlTooltip,
} from '@shoelace-style/shoelace/dist/react';
import { shortenAddress, useEthers } from '@usedapp/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useOwnershipFacet } from '../../contracts/hooks/OwnershipFacet';
import { getAppShell } from '../../lib/constants';
import Jazzicon from '../atoms/Jazzicon';

function Dapp() {
  const { chainId } = useEthers();

  const navigate = useNavigate();

  const { dapp } = useParams<{ dapp: string }>();

  const { value: owner } = useOwnershipFacet.owner(dapp, []) || {};

  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <SlIconButton
            name="chevron-left"
            style={{ fontSize: '1.5em' }}
            onClick={() =>
              navigate(
                //TODO: navigate to last page
                '/'
              )
            }
          />
          <h1>{dapp && shortenAddress(dapp)}</h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <SlTooltip content="Fork to testnet" placement="bottom-end">
            <SlIconButton name="bezier2" style={{ fontSize: '1.5em' }} />
          </SlTooltip>
          <>
            {chainId && dapp && (
              <SlButton
                variant="primary"
                onClick={() =>
                  window.open(getAppShell(chainId, dapp), '_blank')
                }
              >
                OPEN DAPP
              </SlButton>
            )}
          </>
        </div>
      </div>
      <SlDivider className="m-0" />
      {owner && (
        <>
          <h3 className="m-0">Owner</h3>
          <div className="flex flex-row items-center gap-4 p-3">
            <div className="jazzicon-ctr">
              <Jazzicon address={owner?.[0] || ''} />
            </div>
            <div className="flex flex-col">
              <h4>{owner && shortenAddress(owner?.[0])}</h4>
            </div>
          </div>
        </>
      )}
      {/* <h3>Baseplate</h3> */}
      {/* <h3>Created dapplets</h3> */}
      {/* <h3>Installed dapplets</h3> */}
    </div>
  );
}

export default Dapp;
