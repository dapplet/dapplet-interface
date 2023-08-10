import { Key } from 'react';
import { IDappCard } from '../../lib/types';
import DappCard from '../molecules/DappCard';

// In DappCards.tsx
function DappCards({
  dapps,
  isOwned,
}: {
  dapps: IDappCard[] | null | undefined;
  isOwned: boolean;
}) {
  return (
    <div className="dapp-cards">
      {dapps &&
        dapps.map(
          (dapp) =>
            dapp && (
              <DappCard key={dapp.address} dapp={dapp} isOwned={isOwned} />
            )
        )}
    </div>
  );
}


export default DappCards;
