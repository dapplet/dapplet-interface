import { TransactionStatus, useCall } from '@usedapp/core';
import { BigNumber, Contract } from 'ethers';
import { Fragment, Interface } from 'ethers/lib/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDeployments } from '../../contracts';
import { useDappletsFacet } from '../../contracts/hooks/DappletsFacet';
import {
  fetchFirstAvailableJson,
  fetchFirstAvailableText,
} from '../constants/ipfs';

export function useDapplet(address: string | undefined) {
  const diamond = useDeployments('Diamond')?.address;

  const { value: meta } =
    (address && useDappletsFacet.metadataOf(diamond, [[address || '']])) || {};
  const cid = meta?.metadata?.[0];

  return usePilet(cid);
}

export function usePilet(cid: string | undefined) {
  const [pilet, setPilet] = useState<any>(null);

  useMemo(() => {
    cid &&
      fetchFirstAvailableJson(cid).then((query) => {
        query && setPilet(query.res);
      });
  }, [cid]);

  return pilet;
}

export function usePackageJson(pilet: any) {
  const [packageJson, setPackageJson] = useState<any>(null);

  useMemo(() => {
    pilet &&
      fetchFirstAvailableJson(pilet.link, 'package.json').then((query) => {
        query && setPackageJson(query.res);
      });
  }, [pilet]);

  return packageJson;
}

export function useREADME(pilet: any) {
  const [readme, setReadme] = useState<any>(null);

  useMemo(() => {
    pilet &&
      fetchFirstAvailableText(pilet.link, 'README.md').then((query) => {
        const { res } = query;
        if (res && res.length > 0) {
          setReadme(res);
        }
      });
  }, [pilet]);

  return readme;
}

/**
 *
 * @param state -- 2nd return value from useContract.function
 * @param additionalCheck -- callback function for additional conditions
 * @returns -- boolean
 */
export function usePendingTransaction(
  state: TransactionStatus,
  additionalCheck?: (state: TransactionStatus) => boolean
) {
  let additionalCheckPassed = false;
  if (additionalCheck) {
    additionalCheckPassed = additionalCheck(state);
  }
  const [pending, setPending] = useState(false);

  const checkPending = useCallback(() => {
    switch (state.status) {
      case 'None':
      case 'Fail':
      case 'Exception':
        setPending(false);

        break;
      case 'PendingSignature':
      case 'Mining':
        setPending(true);

        break;
      case 'Success':
        if (additionalCheck) {
          if (additionalCheckPassed) {
            setPending(false);
          }
        } else {
          setPending(false);
        }
        break;
    }
  }, [state, additionalCheckPassed]);

  useEffect(() => {
    checkPending();
  }, [checkPending]);

  return pending;
}

export function useInterface(abi?: string) {
  const [iface, setIface] = useState<Interface>();

  useMemo(() => {
    if (abi) {
      setIface(new Interface(abi));
    }
  }, [abi]);

  return iface;
}

export function useMatchSelectors(iface: Interface, selectors: string[]) {
  const [fragments, setFragments] = useState<any[]>([]);

  useMemo(() => {
    if (iface && selectors) {
      const f = selectors.map((selector) => iface.getFunction(selector));
      setFragments(f);
    }
  }, [iface, selectors]);

  return fragments;
}

export function useMatchABIFunctionsWithSelectors(
  abi: string,
  selectors: any[]
) {
  const iface = useInterface(abi);
  const fragments = useMatchSelectors(iface as Interface, selectors);
  return { fragments, iface };
}

export function useSelectors(iface: Interface) {
  const [selectors, setSelectors] = useState<string[]>([]);
  const [fragments, setFragments] = useState<Fragment[]>();

  useMemo(() => {
    if (iface) {
      const functions = iface.fragments.filter(
        (fragment) => fragment.type === 'function'
      );
      setSelectors(functions.map((fragment) => iface.getSighash(fragment)));
      setFragments(functions);
    }
  }, [iface]);

  return { selectors, fragments };
}

export function useInitializerCost(
  addr: string | undefined,
  iface: Interface | undefined
): BigNumber | undefined {
  const { value, error } =
    useCall(
      addr &&
        iface && {
          contract: new Contract(addr, iface),
          method: 'cost',
          args: [],
        }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
}
