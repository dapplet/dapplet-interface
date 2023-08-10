
import { Falsy, Params, QueryParams, TransactionOptions, TypedFilter, useCall, useContractFunction, useLogs } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { Multicall2, Multicall2__factory } from '../types'
const Multicall2Interface = new utils.Interface(Multicall2__factory.abi)


export const useMulticall2_aggregate = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Multicall2, 'aggregate'>(
    contractAddress && new Contract(contractAddress, Multicall2Interface) as Multicall2,
    'aggregate',
    options
  )
}


export const useMulticall2_blockAndAggregate = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Multicall2, 'blockAndAggregate'>(
    contractAddress && new Contract(contractAddress, Multicall2Interface) as Multicall2,
    'blockAndAggregate',
    options
  )
}


export const useMulticall2_getBlockHash = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Multicall2, 'getBlockHash'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Multicall2, 'getBlockHash'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, Multicall2Interface) as Multicall2,
        method: 'getBlockHash',
        args
      }, queryParams
  )
}


export const useMulticall2_getBlockNumber = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Multicall2, 'getBlockNumber'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Multicall2, 'getBlockNumber'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, Multicall2Interface) as Multicall2,
        method: 'getBlockNumber',
        args
      }, queryParams
  )
}


export const useMulticall2_getCurrentBlockCoinbase = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Multicall2, 'getCurrentBlockCoinbase'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Multicall2, 'getCurrentBlockCoinbase'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, Multicall2Interface) as Multicall2,
        method: 'getCurrentBlockCoinbase',
        args
      }, queryParams
  )
}


export const useMulticall2_getCurrentBlockDifficulty = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Multicall2, 'getCurrentBlockDifficulty'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Multicall2, 'getCurrentBlockDifficulty'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, Multicall2Interface) as Multicall2,
        method: 'getCurrentBlockDifficulty',
        args
      }, queryParams
  )
}


export const useMulticall2_getCurrentBlockGasLimit = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Multicall2, 'getCurrentBlockGasLimit'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Multicall2, 'getCurrentBlockGasLimit'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, Multicall2Interface) as Multicall2,
        method: 'getCurrentBlockGasLimit',
        args
      }, queryParams
  )
}


export const useMulticall2_getCurrentBlockTimestamp = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Multicall2, 'getCurrentBlockTimestamp'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Multicall2, 'getCurrentBlockTimestamp'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, Multicall2Interface) as Multicall2,
        method: 'getCurrentBlockTimestamp',
        args
      }, queryParams
  )
}


export const useMulticall2_getEthBalance = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Multicall2, 'getEthBalance'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Multicall2, 'getEthBalance'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, Multicall2Interface) as Multicall2,
        method: 'getEthBalance',
        args
      }, queryParams
  )
}


export const useMulticall2_getLastBlockHash = (
  contractAddress: Falsy | string,
  args: Falsy | Params<Multicall2, 'getLastBlockHash'>,
  queryParams: QueryParams = {}
) => {
  return useCall<Multicall2, 'getLastBlockHash'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, Multicall2Interface) as Multicall2,
        method: 'getLastBlockHash',
        args
      }, queryParams
  )
}


export const useMulticall2_tryAggregate = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Multicall2, 'tryAggregate'>(
    contractAddress && new Contract(contractAddress, Multicall2Interface) as Multicall2,
    'tryAggregate',
    options
  )
}


export const useMulticall2_tryBlockAndAggregate = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Multicall2, 'tryBlockAndAggregate'>(
    contractAddress && new Contract(contractAddress, Multicall2Interface) as Multicall2,
    'tryBlockAndAggregate',
    options
  )
}


export const useMulticall2 = {
  aggregate: useMulticall2_aggregate,
  blockAndAggregate: useMulticall2_blockAndAggregate,
  getBlockHash: useMulticall2_getBlockHash,
  getBlockNumber: useMulticall2_getBlockNumber,
  getCurrentBlockCoinbase: useMulticall2_getCurrentBlockCoinbase,
  getCurrentBlockDifficulty: useMulticall2_getCurrentBlockDifficulty,
  getCurrentBlockGasLimit: useMulticall2_getCurrentBlockGasLimit,
  getCurrentBlockTimestamp: useMulticall2_getCurrentBlockTimestamp,
  getEthBalance: useMulticall2_getEthBalance,
  getLastBlockHash: useMulticall2_getLastBlockHash,
  tryAggregate: useMulticall2_tryAggregate,
  tryBlockAndAggregate: useMulticall2_tryBlockAndAggregate,
  events: {
  
  }
}
