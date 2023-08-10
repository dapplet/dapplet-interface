import { SlDivider } from '@shoelace-style/shoelace/dist/react';
import useWindowDimensions from '../../lib/utils/dimensions';
import MenuDrawer from '../organisms/MenuDrawer';
import Wallet from '../organisms/Wallet';

function Header() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <header id="header">
      <div className="flex justify-between items-center w-full h-full">
        {isMobile ? (
          <>
            <MenuDrawer />
            <a href="https://dapplet.io" target="_blank" rel="noreferrer">
              {' '}
              <img src="/dapplet-logo.png" alt="logo" className="h-10 w-10" />
            </a>
          </>
        ) : (
          <>
            <SlDivider vertical className="m-0 h-8" />
          </>
        )}
        <Wallet />
      </div>
    </header>
  );
}

export default Header;
