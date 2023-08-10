import { SlButton, SlDrawer } from '@shoelace-style/shoelace/dist/react';
import { useRef, useState } from 'react';
import StakeForm from './StakeForm';

function StakeModal({ pkg, name }: { pkg: string; name: string }) {
  const drawer = useRef(null);
  const [open, setOpen] = useState(false);

  function handleHide(e: any) {
    if (e.target === drawer.current) {
      setOpen(false);
    }
  }

  return (
    <>
      <div>
        <SlButton variant="default" onClick={() => setOpen(true)}>
          Stake
        </SlButton>
      </div>
      <SlDrawer
        label={`${name} staking`}
        placement="bottom"
        open={open}
        onSlAfterHide={handleHide}
        ref={drawer}
        style={{
          //@ts-ignore
          '--size': '80vh',
        }}
        className="stake-modal"
      >
        <StakeForm pkg={pkg} />
      </SlDrawer>
    </>
  );
}

export default StakeModal;
