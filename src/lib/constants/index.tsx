import { Goerli, Hardhat, Mainnet, Sepolia } from '@usedapp/core';

const rootName = 'dapplet.eth';
const domain = 'dapplet.io';

export function getAppShell(chainId: number, name: string) {
  switch (chainId) {
    case Mainnet.chainId:
      return `https://${name}.${rootName}`;
    case Goerli.chainId:
      return `https://${name}.${rootName}`;
    case Sepolia.chainId:
      return `https://${name}.${domain}`;
    case Hardhat.chainId:
      return `http://${name}.localhost:1234`;
    default:
      return `https://${name}.${domain}`;
  }
}
