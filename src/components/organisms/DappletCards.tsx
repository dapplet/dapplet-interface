import { IDappletCard } from '../../lib/types';
import DappletCard from '../molecules/DappletCard';

function DappletCards({
  dapplets,
}: {
  dapplets: IDappletCard[] | null | undefined;
}) {
  return (
    <div className="dapplet-cards">
      {dapplets?.map((dapplet, i) => (
        <div key={i} className="dapplet-card">
          <DappletCard dapplet={dapplet} />
        </div>
      ))}
    </div>
  );
}

export default DappletCards;

/* 

      <div className="dapplet-cards">
        {dapplets?.map((dapplet, i) => (
          <div key={i} className="dapplet-card">
            <DappletCard dapplet={dapplet} />
          </div>
        ))}
      </div>
      
      */
