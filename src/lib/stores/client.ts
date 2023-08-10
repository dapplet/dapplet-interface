import create from 'zustand';

/// TODO
/// this is not implemented yet

interface Client {
  selected: string;
  select: (client: string) => void;
  // select: (address: string) => void;
  // loaded?: boolean;
  // setLoaded: (loaded: boolean) => void;
  // view: string;
  // toggle: MouseEventHandler;
}

export const useClientStore = create<Client>((set) => ({
  // getClientAddress
  selected: '',
  select: (client) => set({ selected: client }),
  // select: async (addr: string) => {
  //   const address = ethers.utils.getAddress(addr);
  //   set({ address, loaded: false });
  // },
  // setLoaded: async (loaded: boolean) => set({ loaded }),
  // loaded: false,
  // view: 'dapp',
  // toggle: () =>
  //   set((state) => ({ view: state.view === 'dapp' ? 'list' : 'dapp' })),
}));
