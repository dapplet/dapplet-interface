import { useEthers } from '@usedapp/core';
import bs58 from 'bs58';
import { Buffer } from 'buffer';
import { decode } from 'cbor-x';
import CID from 'cids';
import type { IPFSHTTPClient } from 'ipfs-http-client';
import * as IPFS from 'ipfs-http-client';
import all from 'it-all';
import { useEffect, useState } from 'react';
import { concat as uint8ArrayConcat } from 'uint8arrays/concat';
import { fromString as uint8ArrayFromString } from 'uint8arrays/from-string';
import { toString as uint8ArrayToString } from 'uint8arrays/to-string';
import create from 'zustand';

interface IPFSState {
  node: IPFSHTTPClient;
}

export const useIPFS = create<IPFSState>(() => ({
  node: createIPFS(),
}));

function createIPFS(): IPFSHTTPClient {
  return IPFS.create({
    url: process.env.REACT_APP_INFURA_IPFS_API_ENDPOINT,
    headers: {
      authorization:
        'Basic ' +
        Buffer.from(
          process.env.REACT_APP_INFURA_IPFS_PROJECT_ID +
            ':' +
            process.env.REACT_APP_INFURA_IPFS_API_KEY_SECRET
        ).toString('base64'),
    },
  });
}

export const useContractMetadata = (address?: string) => {
  const { library } = useEthers();

  // use ABI type from ethers
  const [meta, setMeta] = useState<any>(null);

  const ipfs = useIPFS((state) => state.node);

  useEffect(() => {
    if (library && address) {
      library.getCode(address).then(async (code: string) => {
        const ipfsHashLength = parseInt(
          `${code.substring(code.length - 4)}`,
          16
        );
        const cborEncoded = code.substring(
          code.length - 4 - ipfsHashLength * 2,
          code.length - 4
        );
        const contractMetadata = decode(
          uint8ArrayFromString(cborEncoded, 'base16')
        );
        const cidv0 = new CID(bs58.encode(contractMetadata.ipfs));
        const cidv1 = new CID(1, 'dag-pb', cidv0.bytes, 'base32');
        const data = uint8ArrayConcat(await all(ipfs.cat(String(cidv1))));
        const metadata = JSON.parse(uint8ArrayToString(data));
        setMeta(metadata);
      });
    }
  }, [library, address]);

  return meta;
};

// export async function createPkgFromCID(
//   clientAddress: string,
//   cid: string,
//   signer?: any
// ) {}

export async function extractCutsFromCID(cid: string) {}
