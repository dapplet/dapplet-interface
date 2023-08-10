import { useMatchABIFunctionsWithSelectors } from '../../lib/hooks';
import { useContractMetadata } from '../../lib/stores/ipfs';

interface ICUT {
  target: string;
  action: string;
  selectors: string[];
}

function FacetOverview({ cut }: { cut: ICUT }) {
  // getContractMetadata(address)
  const meta = useContractMetadata(cut.target);
  const abi = meta?.output.abi || '';
  console.log('abi', abi);

  const { fragments } =
    useMatchABIFunctionsWithSelectors(abi, cut.selectors) || [];
  console.log('fragments', fragments);

  const name = meta && Object.values(meta?.settings.compilationTarget)[0];
  console.log('name', name);

  const devdoc = meta?.output.devdoc || {};
  console.log('devdoc', devdoc);

  const userdoc = meta?.output.userdoc || {};
  console.log('userdoc', userdoc);

  return (
    <>
      {meta && (
        <div className="flex flex-col">
          <h5>{name}</h5>
          <ul className="m-0">
            {fragments?.map((fragment, i) => (
              <li key={i}>{fragment.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default FacetOverview;
