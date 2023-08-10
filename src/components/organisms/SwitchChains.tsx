import {
  SlButton,
  SlDialog,
  SlDivider,
  SlDropdown,
  SlIcon,
  SlIconButton,
  SlMenu,
  SlMenuItem,
  SlMenuLabel,
  SlTooltip,
} from '@shoelace-style/shoelace/dist/react';
import { useEthers } from '@usedapp/core';
import { useMemo, useRef, useState } from 'react';
import useWindowDimensions from '../../lib/utils/dimensions';

function SwitchChains() {
  const { chainId, switchNetwork } = useEthers();

  const supportedChainIds = [11155111, 31337];
  const validChain = chainId && supportedChainIds.includes(chainId);

  const dialog = useRef(null);

  const [open, setOpen] = useState(false);

  useMemo(() => {
    validChain ? setOpen(false) : setOpen(true);
  }, [validChain]);

  function handleRequestClose(e: any) {
    if (e.detail.source === 'overlay') {
      e.preventDefault();
    }
  }

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  function handleHide(e: any) {
    if (e.target === dialog.current) {
      setOpen(false);
    }
  }

  async function handleSelection(e: any) {
    const value = e.detail.item?.value;
    await switchNetwork(Number(value));
  }

  return (
    <>
      <SlDialog
        open={!!chainId && open}
        onSlAfterHide={handleHide}
        onSlRequestClose={handleRequestClose}
        noHeader
        ref={dialog}
        className="switch-chains-dialog"
      >
        <SlIcon
          name="robot"
          style={{ fontSize: '5rem', color: 'var(--sl-color-danger)' }}
        />
        <h3>
          Network <br /> Not Supported
        </h3>
        <div className="flex flex-row items-center justify-center">
          <SlDropdown>
            <SlButton
              slot="trigger"
              caret
              pill
              variant="default"
              className="w-full"
              size="large"
            >
              <SlIcon
                name="database-fill"
                slot="prefix"
                style={{ color: 'var(--sl-color-default)' }}
              />
              Select Network
            </SlButton>
            <SlMenu onSlSelect={handleSelection}>
              <SlMenuLabel>Available Networks</SlMenuLabel>
              <SlMenuItem value="11155111">
                🧪 Sepolia (Ethereum Testnet)
              </SlMenuItem>
            </SlMenu>
          </SlDropdown>
        </div>
        <SlDivider className="w-full p-0 m-0" />
        <div slot="footer" className="flex items-center justify-evenly">
          <SlTooltip content="Github" placement="top">
            <SlIconButton
              name="github"
              style={{ fontSize: '1.5rem' }}
              href="https://github.com/dapplet"
              target="_blank"
            />
          </SlTooltip>
          <SlDivider vertical className="m-0 h-8" />
          <SlTooltip content="Home" placement="top">
            <a href="https://dapplet.app" target="_blank" rel="noreferrer">
              {' '}
              <img src="/dapplet-logo.png" alt="logo" className="h-8 w-8" />
            </a>
          </SlTooltip>
          <SlDivider vertical className="m-0 h-8" />
          <SlTooltip content="Twitter" placement="top">
            <SlIconButton
              name="twitter"
              style={{ fontSize: '1.5rem', color: '#1DA1F2' }}
              href="https://twitter.com/dappletapp"
              target="_blank"
            />
          </SlTooltip>
        </div>
      </SlDialog>
    </>
  );
}

export default SwitchChains;
