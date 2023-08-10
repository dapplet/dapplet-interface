export interface IDapp {
  name: string;
  address: string;
  block: number;
}

export interface IDapplet {
  name: string;
  description: string;
  address: string;
  block: number;
}

export interface IDappCard {
  address: string;
  block: number;
}

export interface IDappletCard {
  address: string;
  client: string;
  block: number;
}

export interface IDeployments {
  [key: number]: {
    [key: string]: {
      address: string;
      abi?: any;
    };
  };
}

export interface urlParams {
  prefix: string;
  suffix: string;
}
