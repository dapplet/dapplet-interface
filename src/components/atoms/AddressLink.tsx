import { shortenAddress, useEthers } from '@usedapp/core';
import { etherscanUrl } from '../../lib/utils';
import CopyToClipboard from './CopyToClipboard';

function AddressLink({ address }: { address: string }) {
  const { chainId } = useEthers();
  return (
    <div className="address-link">
      {chainId && (
        <div className="flex flex-row justify-center items-center w-full">
          <a
            href={`${etherscanUrl(chainId)}/address/${address}`}
            target="_blank"
            rel="noreferrer"
          >
            {shortenAddress(address)}
          </a>
          <CopyToClipboard text={address} />
        </div>
      )}
    </div>
  );
}

export default AddressLink;
