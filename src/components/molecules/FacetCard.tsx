import { SlCard } from '@shoelace-style/shoelace/dist/react';
import { useContractMetadata } from '../../lib/stores/ipfs';

interface ICUT {
  target: string;
  action: string;
  selectors: string[];
}

function FacetCard({ cut }: { cut: ICUT }) {
  // getContractMetadata(address)
  const meta = useContractMetadata(cut.target);
  const abi = meta?.output.abi || '';
  console.log('abi', abi);

  // const fragments = useMatchABIFunctionsWithSelectors(abi, cut.selectors) || [];
  // console.log('fragments', fragments);

  const name = meta && Object.values(meta?.settings.compilationTarget)[0];
  console.log('name', name);

  const devdoc = meta?.output.devdoc || {};
  console.log('devdoc', devdoc);

  const userdoc = meta?.output.userdoc || {};
  console.log('userdoc', userdoc);

  return (
    <SlCard>
      {/* <img slot="image" src={img} alt={title} /> */}
      {meta && (
        <div slot="header" className=" flex items-center justify-start gap-4">
          <div className="card-title">{name}</div>
        </div>
      )}
      <div className="card-details flex justify-end">
        {devdoc && <>{devdoc.title}</>}
      </div>
      <div slot="footer"></div>
    </SlCard>
  );
}

export default FacetCard;
