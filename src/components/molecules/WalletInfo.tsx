import {
  SlButton,
  SlCard,
  SlDivider,
  SlSkeleton,
} from '@shoelace-style/shoelace/dist/react';
import { useCoingeckoPrice } from '@usedapp/coingecko';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from 'ethers/lib/utils';
import { useDeployments } from '../../contracts';
import { useDappletsFacet } from '../../contracts/hooks/DappletsFacet';
import AddressLink from '../atoms/AddressLink';
import Subtext from '../atoms/Subtext';
import WalletDisconnected from '../atoms/alerts/WalletDisconnected';

function WalletInfo() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const etherPrice = useCoingeckoPrice('ethereum', 'usd');

  const diamond = useDeployments('Diamond')?.address;
  // const tokenBalance = useTokenBalance(diamond, account);

  const { value: sentStakeOf } =
    useDappletsFacet.sentStakeOf(diamond, [account || '']) || {};
  console.log('asdf sentStakeOf', sentStakeOf?.toString());

  const { value: receivedStakeOf } =
    useDappletsFacet.receivedStakeOf(diamond, [account || '']) || {};
  console.log('asdf receivedStakeOf', receivedStakeOf?.toString());

  return (
    <>
      {account ? (
        <div className="flex flex-col gap-4">
          <AddressLink address={account} />
          <SlDivider />

          <SlCard>
            <div className="h-20">
              <div className="flex flex-col gap-2 items-center">
                <Subtext icon="wallet" text="Ether Balance" />
                {etherBalance ? (
                  <>
                    <div>
                      {parseFloat(formatEther(etherBalance)).toFixed(4)}
                    </div>
                    <>
                      {etherPrice && (
                        <div>
                          $
                          {(
                            parseFloat(formatEther(etherBalance)) *
                            Number(etherPrice)
                          ).toFixed(2)}
                        </div>
                      )}
                    </>
                  </>
                ) : (
                  <>
                    <SlSkeleton effect="pulse" className="h-6 w-16" />
                    <SlSkeleton effect="pulse" className="h-6 w-20" />
                  </>
                )}
              </div>
            </div>
          </SlCard>

          {/* <SlCard>
            <div className="flex flex-col justify-center items-center h-10">
              <Subtext icon="wallet" text="Total stake received" />
              <div>0.00</div>
            </div>
          </SlCard>

          <SlCard>
            <div className="flex flex-col justify-center items-center h-10">
              <Subtext icon="wallet" text="Total staked" />
              <div>0.00</div>
            </div>
          </SlCard> */}

          <SlButton variant="text" onClick={() => deactivate()}>
            Disconnect
          </SlButton>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-4 w-full">
          <WalletDisconnected />
          <SlButton
            variant="primary"
            size="medium"
            style={{ width: '100%', marginBottom: '1rem' }}
            onClick={activateBrowserWallet}
          >
            CONNECT WALLET
          </SlButton>
        </div>
      )}
      {/* <ul>
        <li>display balances and conversions to USD</li>
        <li>'Add funds' button: deposit ETH (to WETH)</li>
        <li>display total balance</li>
      </ul> */}
    </>
  );
}

export default WalletInfo;
