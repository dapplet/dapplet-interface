import {
  SlButton,
  SlCard,
  SlTooltip,
} from '@shoelace-style/shoelace/dist/react';
import Subtext from '../atoms/Subtext';

function CreateDapplet() {
  // const modal = useRef(null);
  // const clientStore = useClientStore();
  // const [open, setOpen] = useState(false);

  // const { send: createPkg, state: createPkg_state } = useInstaller.create(
  //   clientStore.selected,
  //   {
  //     gasLimitBufferPercentage: 20,
  //   }
  // );

  // const [generatorView, setGeneratorView] = useState(false);

  // function handleHide(e: any) {
  //   if (e.target === modal.current) {
  //     setOpen(false);
  //   }
  // }

  // // bafkreifzcprjlhixvnmxff2p36ao75jockpeswrlqjcgfcthmxkh37zff4
  // const [cid, setCid] = useState('');
  // const pilet = usePilet(cid);
  // // BEWARE of chainId. here when we go multichain
  // const { chainId. } = useEthers();
  // const cuts: IPKGCUT = (chainId. && pilet?.custom?.[chainId]) || [];

  // function handleSubmit(e: any) {
  //   e.preventDefault();
  //   console.log('createPkg');
  //   cuts && createPkg(cuts, cid, { value: utils.parseEther('0.01') });
  // }

  return (
    <>
      <SlCard>
        <h3>Create Dapplet</h3>
        <p>
          A Dapplet is a small, reusable, and modular microfrontend Dapp that
          can be used as a building block for more complex DApps. DApplets are
          quick and easy to build with the Dapplet-CLI.
        </p>
        <div className="flex justify-between items-center">
          <SlTooltip
            content="Paid to the Dapplet treasury"
            placement="bottom-start"
          >
            <Subtext icon="tag" text="0.01 ETH" />
          </SlTooltip>
          <div className="flex justify-end gap-4">
            <SlButton
              variant="default"
              href="https://docs.dapplet.app"
              target="_blank"
            >
              Learn More
            </SlButton>
            <SlButton variant="primary" disabled>
              Coming soon
            </SlButton>
          </div>
        </div>
      </SlCard>

      {/* <SlDialog
        label="Create Dapplet"
        open={open}
        onSlAfterHide={handleHide}
        ref={modal}
      >
        {generatorView ? (
          <>
            <SlIconButton
              slot="header-actions"
              name="arrow-left"
              onClick={() => setGeneratorView(false)}
            />
            <GenerateTemplate />
          </>
        ) : (
          <form
            className="flex items-center flex-col justify-between gap-4"
            onSubmit={handleSubmit}
          >
            <SlInput
              label="Content Identifier Hash"
              helpText="IPFS Hash"
              placeholder="Qm... or bafy..."
              required
              className="w-full"
              onSlInput={(e) => {
                setCid((e.target as SlInputElement).value);
              }}
            />
            <DiamondSelect />
            <div className="generate-template-text">
              Need a hash?{' '}
              <span
                className="generate-template-link"
                onClick={() => setGeneratorView(true)}
              >
                Generate a template
              </span>
              .
            </div>
            <SlButton
              slot="footer"
              variant="primary"
              type="submit"
              className="w-full"
            >
              Create
            </SlButton>
          </form>
        )}
      </SlDialog> */}
    </>
  );
}

export default CreateDapplet;
