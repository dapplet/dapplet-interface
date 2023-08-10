import type SlInputElement from '@shoelace-style/shoelace/dist/components/input/input';
import {
  SlAlert,
  SlButton,
  SlCard,
  SlDivider,
  SlIcon,
  SlInput,
  SlSkeleton,
} from '@shoelace-style/shoelace/dist/react';
import { useCoingeckoPrice } from '@usedapp/coingecko';
import { useEthers, useTokenBalance } from '@usedapp/core';
import type { BigNumber } from 'ethers';
import { formatEther, parseEther } from 'ethers/lib/utils';
import { useState } from 'react';
import { useDeployments } from '../../contracts';
import { useDappletsFacet } from '../../contracts/hooks/DappletsFacet';
import { usePKG } from '../../contracts/hooks/PKG';
import HandleError from '../atoms/toasts/HandleError';

function StakeForm({ pkg }: { pkg: string }) {
  const { account } = useEthers();
  const diamond = useDeployments('Diamond')?.address;

  const etherPrice = useCoingeckoPrice('ethereum', 'usd');

  const totalValueLocked = useTokenBalance(diamond, pkg);

  const [amountToStake, setAmountToStake] = useState<BigNumber>(
    parseEther('0')
  );
  const [amountToUnstake, setAmountToUnstake] = useState<BigNumber>(
    parseEther('0')
  );

  const { send: stake, state: stake_state } = useDappletsFacet.stake(diamond, {
    gasLimitBufferPercentage: 20,
  });

  const { send: unstake, state: unstake_state } = useDappletsFacet.unstake(
    diamond,
    {
      gasLimitBufferPercentage: 20,
    }
  );

  const { value: myStake } =
    (account && usePKG.maxRedeem(pkg, [account])) || {};
  const { value: previewWithdraw } =
    usePKG.previewWithdraw(pkg, [myStake?.maxShares || '']) || {};
  const earnings =
    myStake &&
    previewWithdraw &&
    myStake?.maxShares.sub(previewWithdraw.shareAmount);

  async function handleStake(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    stake(pkg, {
      value: amountToStake,
      gasLimit: 1000000,
    });
  }

  async function handleUnstake(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    unstake(pkg, amountToUnstake, {
      gasLimit: 1000000,
    });
  }

  return (
    <>
      {account ? (
        <div className="flex flex-col gap-4">
          <div className="stake-cards">
            {totalValueLocked && (
              <SlCard className="stake-card">
                <h4>Total Locked</h4>
                <div>
                  {parseFloat(formatEther(totalValueLocked)).toFixed(4)} WETH
                </div>
                <>
                  {etherPrice && (
                    <div>
                      $
                      {(
                        parseFloat(formatEther(totalValueLocked)) *
                        Number(etherPrice)
                      ).toFixed(2)}
                    </div>
                  )}
                </>
              </SlCard>
            )}
            {myStake && (
              <SlCard className="stake-card">
                <h4>My Stake</h4>
                <div>
                  {parseFloat(formatEther(myStake.maxShares)).toFixed(4)} WETH
                </div>
                <div>
                  $
                  {(
                    parseFloat(formatEther(myStake.maxShares)) *
                    Number(etherPrice)
                  ).toFixed(2)}
                </div>
              </SlCard>
            )}
            {/* Add info to 3rd panel */}
            {earnings ? (
              <SlCard className="stake-card">
                <h4>My Earnings</h4>
                <div>{parseFloat(formatEther(earnings)).toFixed(4)} WETH</div>
                <>
                  {etherPrice && (
                    <div>
                      $
                      {(
                        parseFloat(formatEther(earnings)) * Number(etherPrice)
                      ).toFixed(2)}
                    </div>
                  )}
                </>
              </SlCard>
            ) : (
              <SlSkeleton />
            )}
          </div>
          <SlDivider />
          <div className="flex flex-col m-4 justify-center items-center">
            <div className="stake-inputs">
              <form onSubmit={handleStake} className="stake-input">
                <SlInput
                  className="w-full"
                  type="number"
                  placeholder="0.00"
                  onSlInput={(e) =>
                    setAmountToStake(
                      parseEther((e.target as SlInputElement).value)
                    )
                  }
                >
                  {amountToStake.gt(parseEther('0')) && (
                    <small slot="suffix">ETH</small>
                  )}
                </SlInput>
                <SlButton variant="primary" type="submit" className="w-20">
                  Deposit
                </SlButton>
              </form>
              <form onSubmit={handleUnstake} className="unstake-input">
                <SlInput
                  className="w-full"
                  type="number"
                  placeholder="0.00"
                  onSlInput={(e) =>
                    setAmountToUnstake(
                      parseEther((e.target as SlInputElement).value)
                    )
                  }
                >
                  {amountToUnstake.gt(parseEther('0')) && (
                    <small slot="suffix">ETH</small>
                  )}
                </SlInput>
                <SlButton type="submit" className="w-20">
                  Withdraw
                </SlButton>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <SlAlert variant="warning" open>
            <SlIcon name="info-circle" slot="icon" />
            Connect your wallet to stake
          </SlAlert>
        </div>
      )}
      <HandleError state={stake_state} />
      <HandleError state={unstake_state} />
    </>
  );
}

export default StakeForm;
