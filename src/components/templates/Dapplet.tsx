import { SlDivider, SlIconButton } from '@shoelace-style/shoelace/dist/react';
import { shortenAddress } from '@usedapp/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeployments } from '../../contracts';
import { useDappletsFacet } from '../../contracts/hooks/DappletsFacet';
import { useOperatorFacet } from '../../contracts/hooks/OperatorFacet';
import { usePKG } from '../../contracts/hooks/PKG';
import { useDapplet } from '../../lib/hooks';
import CopyToClipboard from '../atoms/CopyToClipboard';
import Jazzicon from '../atoms/Jazzicon';
import Subtext from '../atoms/Subtext';
import FacetOverview from '../molecules/FacetOverview';
import InstallModal from '../organisms/InstallModal';
import ReadMe from '../organisms/ReadMe';
import StakeModal from '../organisms/StakeModal';

function Dapplet() {
  const navigate = useNavigate();
  const diamond = useDeployments('Diamond')?.address;
  const { pkg } = useParams();

  /// valid pkg address
  const { value: isPkg } = useDappletsFacet.isPkg(diamond, [pkg || '']) || {};
  /// the pilet -- package.json and more...
  const dapplet = useDapplet(pkg) || {};

  /// the cuts {target, action, selectors}, target, selector...
  const { value: upgrade } = usePKG.get(pkg, [0]) || {};
  console.log('upgrade', upgrade);

  /// the log where the pkg was created
  const { value: log } =
    useOperatorFacet.events.PackageCreated(diamond, [pkg || '']) || {};

  // get clients who've installed pkg
  const system = useDeployments('Diamond')?.address;
  const { value: installers } =
    useDappletsFacet.installersOf(system, [pkg || '']) || {};
  console.log('asdf installers', installers);

  /// the owner of the pkg
  const { value: ownerOf } =
    useDappletsFacet.ownerOf(diamond, [pkg || '']) || {};
  // const ownerOf = { owner: ethers.constants.AddressZero };

  const description = dapplet?.description;

  console.log('asdf dapplet', dapplet);

  return (
    <div className="flex flex-col gap-4 w-full">
      {pkg && isPkg && dapplet && (
        <>
          <div className="dapplet-panels">
            {/* left main panel */}
            <div className="dapplet-main-panel">
              <div className="dapplet-menu-bar">
                <div className="flex gap-4">
                  <SlIconButton
                    name="chevron-left"
                    style={{ fontSize: '1.5em' }}
                    onClick={() => navigate('/')}
                  />
                  <div className="jazzicon-ctr">
                    <Jazzicon address={pkg} />
                  </div>
                  <div>
                    <h1 className="m-0">{dapplet?.name}</h1>
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <CopyToClipboard text={pkg} />
                  <StakeModal pkg={pkg} name={dapplet?.name} />
                  <InstallModal pkg={pkg} name={dapplet?.name} />
                </div>
              </div>
              <ReadMe dapplet={dapplet} />
            </div>
            {/* right sidebar */}
            <div className="dapplet-info-panel">
              <>
                <h3 className="m-0">Owner</h3>
                <div className="flex flex-row items-center gap-4 p-3">
                  <div className="jazzicon-ctr">
                    <Jazzicon address={ownerOf?.owner || ''} />
                  </div>
                  <div className="flex flex-col">
                    <h4>{ownerOf && shortenAddress(ownerOf?.owner)}</h4>
                  </div>
                </div>
              </>
              <SlDivider />
              <>
                <h3 className="m-0">Description</h3>
                <div className="flex flex-col justify-start gap-4 p-3">
                  {description && description.length > 0 ? (
                    <>{dapplet?.description}</>
                  ) : (
                    <h4>No Description Found</h4>
                  )}
                </div>
              </>
              <SlDivider />
              <>
                <h3 className="m-0">About</h3>
                <div className="flex flex-col justify-start gap-4 p-3">
                  <Subtext
                    text={`${log?.[0]?.blockNumber}`}
                    heading="Deployed Block"
                    icon="calendar3"
                    size="medium"
                  />
                  <Subtext
                    text={dapplet?.license?.type}
                    heading="License"
                    icon="book"
                    size="medium"
                  />
                </div>
              </>
              <SlDivider />
              <>
                {installers && installers?.[0]?.length > 0 && (
                  <>
                    <h3 className="m-0">Installed on</h3>
                    <div className="flex flex-col justify-start gap-4 p-3">
                      {installers?.[0]?.map((installer: any, i: number) => (
                        <div key={i} className="flex flex-row items-center">
                          <div className="flex flex-col">
                            <h4>{shortenAddress(installer)}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                    <SlDivider />
                  </>
                )}
              </>
              <>
                <h3 className="m-0">Functions</h3>
                <div className="flex flex-col justify-start gap-4 p-3">
                  {upgrade &&
                    upgrade?.cuts.map(
                      (cut: any, i: number) =>
                        cut && <FacetOverview key={i} cut={cut} />
                    )}
                </div>
              </>
              <SlDivider />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dapplet;
