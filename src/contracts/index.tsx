import { useEthers } from '@usedapp/core';
import { IDeployments } from '../lib/types';
import deployments from './deployments.json';

export function deployment(contractName: string, chainId: number) {
  return (deployments as IDeployments)[chainId as keyof IDeployments]?.[
    contractName
  ];
}

export function useDeployments(contractName: string) {
  const { chainId } = useEthers();
  return (deployments as IDeployments)[chainId as keyof IDeployments]?.[
    contractName
  ];
}

// export function useFacet(contractName: string) {
//   return new ethers.Contract(
//     useDeployments(contractName)?.abi,
//     useDeployments('Diamond')?.address,
//     useEthers().library
//   );
// }

// export function getFacet(contractName: string, chainId: number, library: any) {
//   return new ethers.Contract(
//     deployment(contractName, chainId)?.address,
//     deployment('Diamond', chainId)?.abi,
//     library
//   );
// }

export const rootName = 'dapptest.eth';
