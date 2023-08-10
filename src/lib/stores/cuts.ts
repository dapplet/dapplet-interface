import create from 'zustand';
import { IFacetCut } from '../shared';

interface FacetCutsState {
  cuts: IFacetCut[];
  addFacetCut: (cut: IFacetCut) => void;
  removeFacetByTarget: (target: string) => void;
  removeSelector: (target: string, selector: string) => void;
}

export const useFacetCutsStore = create<FacetCutsState>((set) => ({
  cuts: [] as IFacetCut[],
  // add
  addFacetCut: (item) => {
    set((state) => {
      if (state.cuts.find((cut) => cut.target === item.target)) {
        //replace
        return {
          cuts: state.cuts.map((cut) =>
            cut.target === item.target ? item : cut
          ),
        };
      }
      return {
        cuts: [...state.cuts, item],
      };
    });
  },
  // remove
  removeFacetByTarget: (target: string) => {
    set((state) => ({
      cuts: state.cuts.filter((cut) => cut.target !== target),
    }));
  },

  removeSelector: (target: string, selector: string) => {
    set((state) => ({
      cuts: state.cuts.map((cut) => {
        if (cut.target === target) {
          return {
            ...cut,
            selectors: cut.selectors.filter((s) => s !== selector),
          };
        }
        return cut;
      }),
    }));
  },
}));
