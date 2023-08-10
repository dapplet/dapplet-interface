import {
  SlButton,
  SlCard,
  SlDialog,
  SlTooltip,
} from '@shoelace-style/shoelace/dist/react';
import { useRef, useState } from 'react';
import Subtext from '../atoms/Subtext';
import CreateDappForm from '../molecules/CreateDappForm';

function CreateDapp() {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);

  function handleHide(e: any) {
    if (e.target === dialog.current) {
      setOpen(false);
    }
  }

  return (
    <>
      <SlCard>
        <h2 slot="header">Build</h2>
        <p>
          A Dapp in the Dapplet ecosystem is a decentralized app that can be
          built by anyone of any skill level. Dapps are composed of Dapplets and
          can be upgraded over time.
        </p>
        <div className="flex justify-between items-center">
          <SlTooltip
            content="Paid to the Dapplet treasury"
            placement="bottom-start"
          >
            <Subtext icon="tag" text="0.001 ETH" />
          </SlTooltip>
          <div className="flex justify-end gap-4">
            <SlButton
              variant="default"
              href="https://docs.dapplet.io"
              target="_blank"
            >
              Learn More
            </SlButton>
            <SlButton variant="primary" onClick={() => setOpen(true)}>
              Create
            </SlButton>
          </div>
        </div>
      </SlCard>

      <SlDialog
        label="Create Dapp"
        ref={dialog}
        open={open}
        onSlAfterHide={handleHide}
      >
        <CreateDappForm />
      </SlDialog>
    </>
  );
}

export default CreateDapp;
