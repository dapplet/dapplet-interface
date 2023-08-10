import { ethers } from 'ethers';

export interface IFacetCut {
  target: string;
  action: number;
  selectors: string[];
}

export interface IPKGCUT {
  cuts: IFacetCut[];
  target: string;
  selector: string;
}

export const costOf = {
  createPkg: ethers.utils.parseEther('0.01'),
  createClient: ethers.utils.parseEther('0.01'),
  install: ethers.utils.parseEther('0.001'),
};
