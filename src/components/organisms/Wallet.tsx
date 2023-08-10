import {
  SlButton,
  SlDropdown,
  SlIcon,
  SlMenu,
  SlMenuItem,
} from '@shoelace-style/shoelace/dist/react';
import { useEthers } from '@usedapp/core';
import useWindowDimensions from '../../lib/utils/dimensions';
import Jazzicon from '../atoms/Jazzicon';
import WalletInfo from '../molecules/WalletInfo';

function Wallet() {
  const { account } = useEthers();

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <div className="flex justify-center items-center p-2 m-2">
      <SlDropdown>
        <SlButton
          slot="trigger"
          variant="primary"
          size="medium"
          circle={isMobile}
          pill={!isMobile}
          caret={!isMobile}
          outline={account ? true : false}
          className={isMobile ? 'jazzicon-btn' : 'wallet-btn'}
          // className="jazzicon-btn"
        >
          <div
            slot={`${!isMobile ? 'prefix' : ''}`}
            className={`${!isMobile ? 'wallet-icon' : ''}`}
          >
            {isMobile ? (
              <>
                {account ? (
                  <>
                    <Jazzicon address={account} size="small" />
                  </>
                ) : (
                  <SlIcon
                    name="credit-card-fill"
                    style={{ color: 'var(--sl-background-color-secondary)' }}
                  />
                )}
              </>
            ) : (
              <>
                {account ? (
                  <Jazzicon address={account} size="small" />
                ) : (
                  <SlIcon
                    name="credit-card-fill"
                    style={{
                      color: 'var(--sl-background-color-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '-1rem',
                    }}
                  />
                )}
              </>
            )}
          </div>
          {!isMobile && <>{account ? <>Connected</> : <>Connect</>}</>}
        </SlButton>
        <SlMenu>
          <SlMenuItem className="wallet">
            <WalletInfo />
          </SlMenuItem>
        </SlMenu>
      </SlDropdown>
    </div>
  );
}

export default Wallet;
