import {
  SlButton,
  SlDrawer,
  SlIcon,
} from '@shoelace-style/shoelace/dist/react';
import { useRef, useState } from 'react';
import DiamondSelect from '../molecules/DiamondSelect';
import InstallForm from '../molecules/InstallForm';

function InstallModal({ pkg, name }: { pkg: string; name: string }) {
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
        <SlButton variant="primary" onClick={() => setOpen(true)}>
          <SlIcon
            name="window-plus"
            slot="suffix"
            style={{ filter: 'invert(1)' }}
          />
          Install
        </SlButton>
      </div>
      <SlDrawer
        label={`Install ${name}`}
        placement="end"
        open={open}
        onSlAfterHide={handleHide}
        ref={drawer}
      >
        <DiamondSelect pkg={pkg} />
        <InstallForm pkg={pkg} />
      </SlDrawer>
    </>
  );
}

export default InstallModal;
