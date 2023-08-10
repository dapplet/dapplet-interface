
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { BasicDiamond, BasicDiamond__factory } from '../types'
const BasicDiamondInterface = new utils.Interface(BasicDiamond__factory.abi)


export const useBasicDiamond_acceptOwnership = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<BasicDiamond, 'acceptOwnership'>(
    contractAddress && new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
    'acceptOwnership',
    options
  )
}


export const useBasicDiamond_create = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<BasicDiamond, 'create'>(
    contractAddress && new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
    'create',
    options
  )
}


export const useBasicDiamond_diamondCut = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<BasicDiamond, 'diamondCut'>(
    contractAddress && new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
    'diamondCut',
    options
  )
}


export const useBasicDiamond_facetAddress = (
  contractAddress: Falsy | string,
  args: Falsy | Params<BasicDiamond, 'facetAddress'>,
  queryParams: QueryParams = {}
) => {
  return useCall<BasicDiamond, 'facetAddress'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
        method: 'facetAddress',
        args
      }, queryParams
  )
}


export const useBasicDiamond_facetAddresses = (
  contractAddress: Falsy | string,
  args: Falsy | Params<BasicDiamond, 'facetAddresses'>,
  queryParams: QueryParams = {}
) => {
  return useCall<BasicDiamond, 'facetAddresses'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
        method: 'facetAddresses',
        args
      }, queryParams
  )
}


export const useBasicDiamond_facetFunctionSelectors = (
  contractAddress: Falsy | string,
  args: Falsy | Params<BasicDiamond, 'facetFunctionSelectors'>,
  queryParams: QueryParams = {}
) => {
  return useCall<BasicDiamond, 'facetFunctionSelectors'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
        method: 'facetFunctionSelectors',
        args
      }, queryParams
  )
}


export const useBasicDiamond_facets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<BasicDiamond, 'facets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<BasicDiamond, 'facets'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
        method: 'facets',
        args
      }, queryParams
  )
}


export const useBasicDiamond_init = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<BasicDiamond, 'init'>(
    contractAddress && new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
    'init',
    options
  )
}


export const useBasicDiamond_install = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<BasicDiamond, 'install'>(
    contractAddress && new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
    'install',
    options
  )
}


export const useBasicDiamond_nomineeOwner = (
  contractAddress: Falsy | string,
  args: Falsy | Params<BasicDiamond, 'nomineeOwner'>,
  queryParams: QueryParams = {}
) => {
  return useCall<BasicDiamond, 'nomineeOwner'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
        method: 'nomineeOwner',
        args
      }, queryParams
  )
}


export const useBasicDiamond_owner = (
  contractAddress: Falsy | string,
  args: Falsy | Params<BasicDiamond, 'owner'>,
  queryParams: QueryParams = {}
) => {
  return useCall<BasicDiamond, 'owner'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
        method: 'owner',
        args
      }, queryParams
  )
}


export const useBasicDiamond_supportsInterface = (
  contractAddress: Falsy | string,
  args: Falsy | Params<BasicDiamond, 'supportsInterface'>,
  queryParams: QueryParams = {}
) => {
  return useCall<BasicDiamond, 'supportsInterface'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
        method: 'supportsInterface',
        args
      }, queryParams
  )
}


export const useBasicDiamond_transferOwnership = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<BasicDiamond, 'transferOwnership'>(
    contractAddress && new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
    'transferOwnership',
    options
  )
}


export const useBasicDiamond_uninstall = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<BasicDiamond, 'uninstall'>(
    contractAddress && new Contract(contractAddress, BasicDiamondInterface) as BasicDiamond,
    'uninstall',
    options
  )
}


export const useBasicDiamond_event_DappletUpgrade = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<BasicDiamond, 'DappletUpgrade'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface),
        event: 'DappletUpgrade',
        args: args || [],
      },
    queryParams
  )
}


export const useBasicDiamond_event_DiamondCut = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<BasicDiamond, 'DiamondCut'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface),
        event: 'DiamondCut',
        args: args || [],
      },
    queryParams
  )
}


export const useBasicDiamond_event_OwnershipTransferred = (
  contractAddress: Falsy | string,
  args: Falsy | TypedFilter<BasicDiamond, 'OwnershipTransferred'>['args'],
  queryParams: QueryParams = {}
) => {
  return useLogs(
    contractAddress
      && {
        contract: new Contract(contractAddress, BasicDiamondInterface),
        event: 'OwnershipTransferred',
        args: args || [],
      },
    queryParams
  )
}


export const useBasicDiamond = {
  acceptOwnership: useBasicDiamond_acceptOwnership,
  create: useBasicDiamond_create,
  diamondCut: useBasicDiamond_diamondCut,
  facetAddress: useBasicDiamond_facetAddress,
  facetAddresses: useBasicDiamond_facetAddresses,
  facetFunctionSelectors: useBasicDiamond_facetFunctionSelectors,
  facets: useBasicDiamond_facets,
  init: useBasicDiamond_init,
  install: useBasicDiamond_install,
  nomineeOwner: useBasicDiamond_nomineeOwner,
  owner: useBasicDiamond_owner,
  supportsInterface: useBasicDiamond_supportsInterface,
  transferOwnership: useBasicDiamond_transferOwnership,
  uninstall: useBasicDiamond_uninstall,
  events: {
    DappletUpgrade: useBasicDiamond_event_DappletUpgrade,
    DiamondCut: useBasicDiamond_event_DiamondCut,
    OwnershipTransferred: useBasicDiamond_event_OwnershipTransferred
  }
}
