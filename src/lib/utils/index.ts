import { Contract } from 'ethers';
export * from './dimensions';

export function etherscanUrl(chainId: number) {
  switch (chainId) {
    case 1:
      return 'https://etherscan.io';
    case 5:
      return 'https://goerli.etherscan.io';
    case 10:
      return 'https://optimistic.etherscan.io';
    case 420:
      return 'https://goerli-optimism.etherscan.io/';
    case 42161:
      return 'https://arbiscan.io';
    case 421613:
      return 'https://testnet.arbiscan.io/';
    case 11155111:
      return 'https://sepolia.etherscan.io/';
    default:
      return 'https://etherscan.io';
  }
}

const action = { add: 0, replace: 1, remove: 2 };

export function createAddFacetCut(contracts: Contract[]) {
  let cuts = [];
  for (const contract of contracts) {
    cuts.push({
      target: contract.address,
      action: action.add,
      selectors: Object.keys(contract.interface.functions)
        // .filter((fn) => fn != 'init()')
        .map((fn) => contract.interface.getSighash(fn)),
    });
  }
  return cuts;
}
