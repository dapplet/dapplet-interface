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

export interface OperatorFacetInterface extends utils.Interface {
  functions: {
    "createPkg(((address,uint8,bytes4[])[],address,bytes4),string,address)": FunctionFragment;
    "installPkg(address,address,bytes4,bytes)": FunctionFragment;
    "template()": FunctionFragment;
    "uninstallPkg(address,address,bytes4,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createPkg"
      | "installPkg"
      | "template"
      | "uninstallPkg"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createPkg",
    values: [IPKG.UPGRADEStruct, PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "installPkg",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "template", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uninstallPkg",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "createPkg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "installPkg", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "template", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uninstallPkg",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ClientUpgraded(address,address,address,bool)": EventFragment;
    "PackageCreated(address,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClientUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PackageCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ClientUpgradedEventObject {
  pkg: string;
  client: string;
  caller: string;
  install: boolean;
}
export type ClientUpgradedEvent = TypedEvent<
  [string, string, string, boolean],
  ClientUpgradedEventObject
>;

export type ClientUpgradedEventFilter = TypedEventFilter<ClientUpgradedEvent>;

export interface PackageCreatedEventObject {
  pkg: string;
  creator: string;
}
export type PackageCreatedEvent = TypedEvent<
  [string, string],
  PackageCreatedEventObject
>;

export type PackageCreatedEventFilter = TypedEventFilter<PackageCreatedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface OperatorFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OperatorFacetInterface;

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
    createPkg(
      _pkg: IPKG.UPGRADEStruct,
      _ipfsCid: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    installPkg(
      _pkg: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      initFn: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    template(overrides?: CallOverrides): Promise<[string]>;

    uninstallPkg(
      _pkg: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      initFn: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createPkg(
    _pkg: IPKG.UPGRADEStruct,
    _ipfsCid: PromiseOrValue<string>,
    _caller: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  installPkg(
    _pkg: PromiseOrValue<string>,
    _caller: PromiseOrValue<string>,
    initFn: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  template(overrides?: CallOverrides): Promise<string>;

  uninstallPkg(
    _pkg: PromiseOrValue<string>,
    _caller: PromiseOrValue<string>,
    initFn: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createPkg(
      _pkg: IPKG.UPGRADEStruct,
      _ipfsCid: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    installPkg(
      _pkg: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      initFn: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    template(overrides?: CallOverrides): Promise<string>;

    uninstallPkg(
      _pkg: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      initFn: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;

    "ClientUpgraded(address,address,address,bool)"(
      pkg?: PromiseOrValue<string> | null,
      client?: PromiseOrValue<string> | null,
      caller?: PromiseOrValue<string> | null,
      install?: null
    ): ClientUpgradedEventFilter;
    ClientUpgraded(
      pkg?: PromiseOrValue<string> | null,
      client?: PromiseOrValue<string> | null,
      caller?: PromiseOrValue<string> | null,
      install?: null
    ): ClientUpgradedEventFilter;

    "PackageCreated(address,address)"(
      pkg?: PromiseOrValue<string> | null,
      creator?: PromiseOrValue<string> | null
    ): PackageCreatedEventFilter;
    PackageCreated(
      pkg?: PromiseOrValue<string> | null,
      creator?: PromiseOrValue<string> | null
    ): PackageCreatedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    createPkg(
      _pkg: IPKG.UPGRADEStruct,
      _ipfsCid: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    installPkg(
      _pkg: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      initFn: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    template(overrides?: CallOverrides): Promise<BigNumber>;

    uninstallPkg(
      _pkg: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      initFn: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPkg(
      _pkg: IPKG.UPGRADEStruct,
      _ipfsCid: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    installPkg(
      _pkg: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      initFn: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    template(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uninstallPkg(
      _pkg: PromiseOrValue<string>,
      _caller: PromiseOrValue<string>,
      initFn: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
