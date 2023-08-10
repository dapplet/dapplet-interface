import { SlCard } from '@shoelace-style/shoelace/dist/react';
import { shortenAddress, useEthers } from '@usedapp/core';
import { useNavigate } from 'react-router-dom';
import { getAppShell } from '../../lib/constants';
import { IDappCard } from '../../lib/types';
import JazzBanner from '../atoms/JazzBanner';
import Subtext from '../atoms/Subtext';

function DappCard({ dapp, isOwned }: { dapp: IDappCard; isOwned: boolean }) {
  const { chainId } = useEthers();
  const navigate = useNavigate();

  return (
    <>
      {chainId && (
        <SlCard
          className="dapp-card"
          onClick={() =>
            window.open(getAppShell(chainId, dapp.address), '_blank')
          }
          // onClick={() => navigate(`/dapps/${dapp.address}`)}
        >
          <div slot="header">
            <div className="dapp-card-title m-2">
              {shortenAddress(dapp.address)}
            </div>
            <JazzBanner address={dapp.address} />
          </div>

          <div className="dapp-card-content">
            <Subtext icon="box" text={dapp.block.toString()} />
          </div>
        </SlCard>
      )}
    </>
  );
}

export default DappCard;
