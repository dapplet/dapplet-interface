/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IDiamondWritableInternal {
  export type FacetCutStruct = {
    target: PromiseOrValue<string>;
    action: PromiseOrValue<BigNumberish>;
    selectors: PromiseOrValue<BytesLike>[];
  };

  export type FacetCutStructOutput = [string, number, string[]] & {
    target: string;
    action: number;
    selectors: string[];
  };
}

export declare namespace IPKG {
  export type UPGRADEStruct = {
    cuts: IDiamondWritableInternal.FacetCutStruct[];
    target: PromiseOrValue<string>;
    selector: PromiseOrValue<BytesLike>;
  };

  export type UPGRADEStructOutput = [
    IDiamondWritableInternal.FacetCutStructOutput[],
    string,
    string
  ] & {
    cuts: IDiamondWritableInternal.FacetCutStructOutput[];
    target: string;
    selector: string;
  };
}

export interface IInstallerInterface extends utils.Interface {
  functions: {
    "create(((address,uint8,bytes4[])[],address,bytes4),string)": FunctionFragment;
    "diamondCut((address,uint8,bytes4[])[],address,bytes)": FunctionFragment;
    "install(address,bytes)": FunctionFragment;
    "uninstall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "create" | "diamondCut" | "install" | "uninstall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "create",
    values: [IPKG.UPGRADEStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "diamondCut",
    values: [
      IDiamondWritableInternal.FacetCutStruct[],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "install",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "uninstall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "install", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uninstall", data: BytesLike): Result;

  events: {
    "DiamondCut(tuple[],address,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
}

export interface DiamondCutEventObject {
  facetCuts: IDiamondWritableInternal.FacetCutStructOutput[];
  target: string;
  data: string;
}
export type DiamondCutEvent = TypedEvent<
  [IDiamondWritableInternal.FacetCutStructOutput[], string, string],
  DiamondCutEventObject
>;

export type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;

export interface IInstaller extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IInstallerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    create(
      _pkg: IPKG.UPGRADEStruct,
      _ipfsCid: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    diamondCut(
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    install(
      _pkg: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uninstall(
      _pkg: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  create(
    _pkg: IPKG.UPGRADEStruct,
    _ipfsCid: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  diamondCut(
    facetCuts: IDiamondWritableInternal.FacetCutStruct[],
    target: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  install(
    _pkg: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uninstall(
    _pkg: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    create(
      _pkg: IPKG.UPGRADEStruct,
      _ipfsCid: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    diamondCut(
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    install(
      _pkg: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    uninstall(
      _pkg: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DiamondCut(tuple[],address,bytes)"(
      facetCuts?: null,
      target?: null,
      data?: null
    ): DiamondCutEventFilter;
    DiamondCut(
      facetCuts?: null,
      target?: null,
      data?: null
    ): DiamondCutEventFilter;
  };

  estimateGas: {
    create(
      _pkg: IPKG.UPGRADEStruct,
      _ipfsCid: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    diamondCut(
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    install(
      _pkg: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uninstall(
      _pkg: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      _pkg: IPKG.UPGRADEStruct,
      _ipfsCid: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    diamondCut(
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    install(
      _pkg: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uninstall(
      _pkg: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
