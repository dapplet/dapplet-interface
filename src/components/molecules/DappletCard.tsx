import { SlCard, SlSkeleton } from '@shoelace-style/shoelace/dist/react';
import { useNavigate } from 'react-router-dom';
import { useDapplet } from '../../lib/hooks';
import { IDappletCard } from '../../lib/types';
import Jazzicon from '../atoms/Jazzicon';

function DappletCard({ dapplet }: { dapplet: IDappletCard }) {
  const navigate = useNavigate();

  const pilet = useDapplet(dapplet.address);

  return (
    <>
      {pilet && (
        <div className="dapplet-card-container">
          <SlCard
            className="dapplet-card"
            onClick={() => navigate(`/dapplets/${dapplet.address}`)}
          >
            <div className="dapplet-card-icon">
              <Jazzicon
                address={dapplet.address}
                size="large"
                // label={title}
              />
            </div>
            <div className="dapplet-card-content">
              {pilet ? (
                <div className="dapplet-card-title">{pilet?.name}</div>
              ) : (
                <SlSkeleton
                  effect="pulse"
                  className="h-6"
                  style={{ width: '70%' }}
                />
              )}
            </div>
          </SlCard>
        </div>
      )}
    </>
  );
}

export default DappletCard;
