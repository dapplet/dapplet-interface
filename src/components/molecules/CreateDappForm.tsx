import {
  SlButton,
  SlCheckbox,
  SlDetails,
} from '@shoelace-style/shoelace/dist/react';
import { ethers } from 'ethers';
import { useDeployments } from '../../contracts';
import { useDappsFacet } from '../../contracts/hooks/DappsFacet';
import { costOf } from '../../lib/shared';
import HandleError from '../atoms/toasts/HandleError';

function CreateDappForm() {
  const diamond = useDeployments('Diamond')?.address;

  const { send: createClient, state: createClient_state } =
    useDappsFacet.createClient(diamond);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const basic_id = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('basic'));
    createClient(basic_id, {
      value: costOf.createClient,
    });
  }

  // const toast = useRef(null);

  // const [message, setMessage] = useState('Mining transaction!');

  // useMemo(() => {
  //   if (createClient_state.status === 'Mining') {
  //     //@ts-ignore
  //     toast.current && toast.current.toast();
  //     setMessage('Creating Dapp...');
  //   }
  //   if (createClient_state.status === 'Success') {
  //     //@ts-ignore
  //     toast.current && toast.current.toast();
  //     setMessage('Dapp created!');
  //   }
  // }, [createClient_state]);

  // function viewTx() {
  //   createClient_state?.transaction?.hash &&
  //     window.open(
  //       `https://sepolia.etherscan.io/tx/${createClient_state.transaction.hash}`
  //     );
  // }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <SlDetails summary="Terms & Conditions">
          This project is still on testnet. Please be sure to read our{' '}
          <a href="https://docs.dapplet.app">documentation</a> and{' '}
          <a href="https://dapplet.app/about">about</a> to understand the risks
          of using this platform. You are solely liable for any damages caused
          by adding and/or removing modules on your Dapp. Please be aware of 1)
          what you are signing, and 2) whether a module is safe to use.
        </SlDetails>
        <div className="flex flex-row gap-2 items-center justify-center">
          <SlCheckbox required />
          <p>I agree to the terms & conditions above.</p>
        </div>
        <SlButton slot="footer" variant="primary" type="submit">
          Create
        </SlButton>
      </form>
      <HandleError state={createClient_state} />
    </>
  );
}

export default CreateDappForm;
