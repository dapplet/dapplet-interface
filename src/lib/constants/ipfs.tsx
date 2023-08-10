import { urlParams } from '../types';

export const gateways: urlParams[] = [
  {
    prefix: 'https://',
    suffix: '.ipfs.w3s.link/',
  },
  {
    prefix: 'https://ipfs.io/ipfs/',
    suffix: '',
  },
  {
    prefix: 'https://gateway.ipfs.io/ipfs/',
    suffix: '',
  },
];

export async function fetchFirstAvailableJson(cid: string, file?: string) {
  for (const schema of gateways) {
    let url;
    file
      ? (url = `${schema.prefix}${cid}${schema.suffix}/${file}`)
      : (url = `${schema.prefix}${cid}${schema.suffix}`);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const res = await response.json();
        return { res, schema };
      }
    } catch {
      console.info(`Fetch stopped: ${url}`);
    }
  }
  return { res: null, schema: null };
}

export async function fetchFirstAvailableText(cid: string, file?: string) {
  for (const schema of gateways) {
    let url;
    file
      ? (url = `${schema.prefix}${cid}${schema.suffix}/${file}`)
      : (url = `${schema.prefix}${cid}${schema.suffix}`);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const res = await response.text();
        return { res, schema };
      }
    } catch {
      console.info(`Fetch stopped: ${url}`);
    }
  }
  return { res: null, schema: null };
}
