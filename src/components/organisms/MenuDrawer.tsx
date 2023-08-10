import {
  SlButton,
  SlDrawer,
  SlIcon,
  SlIconButton,
  SlSwitch,
} from '@shoelace-style/shoelace/dist/react';
import { useEthers } from '@usedapp/core';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems as items, menuItem } from '../../lib/constants/menu';
import { useTheme } from '../../lib/stores/theme';
import MenuTree from '../molecules/MenuTree';

function MenuDrawer() {
  const drawer = useRef(null);
  const [open, setOpen] = useState(false);
  const toggleTheme = useTheme((state) => state.toggle);
  const theme = useTheme((state) => state.theme);

  //TODO: integrate with react-router

  const handleClick = (item: menuItem) => {
    if (item?.items || item?.opens) {
      item.items && setTree(item.items);
      if (item.opens) {
        setElement(item.opens);
      } else {
        setElement(<MenuTree tree={item.items} onClick={handleClick} />);
      }
      setNode(item.name);
    } else {
      close().then(() => {
        item.href
          ? window.open(item.href, '_blank')
          : item.link && navigate(item.link);
      });
    }
  };

  const close = async () => {
    setOpen(false);
    setTree(items[0].items);
  };

  const [node, setNode] = useState<string>(items[0].name);
  const [tree, setTree] = useState(items[0].items);
  const [element, setElement] = useState<React.ReactNode | null>(
    <MenuTree tree={tree} onClick={handleClick} />
  );

  const navigate = useNavigate();

  const { account, activateBrowserWallet } = useEthers();

  // function handleHide(e: any) {
  //   if (e.target === drawer.current) {
  //     setOpen(false);
  //   }
  // }

  return (
    <div className="m-2">
      <SlIconButton
        name="list"
        style={{ fontSize: '2rem' }}
        onClick={() => setOpen(true)}
      />

      <SlDrawer
        label={node}
        placement="start"
        open={open}
        onSlAfterHide={() => setOpen(false)}
        ref={drawer}
      >
        {node !== items[0].name && (
          <SlIconButton
            slot="header-actions"
            name="arrow-left"
            onClick={() =>
              handleClick({ items: items[0].items, name: items[0].name })
            }
          />
        )}
        <div className="menu-element h-full">
          {tree?.[0].opens ? tree?.[0].opens : element}
        </div>
        <div slot="footer">
          {!account && (
            <>
              <br />
              <SlButton
                variant="primary"
                size="medium"
                style={{ width: '100%', marginBottom: '1rem' }}
                onClick={activateBrowserWallet}
              >
                CONNECT WALLET
              </SlButton>
            </>
          )}
          <SlSwitch
            className="menu-switch"
            checked={theme === 'dark'}
            onSlChange={toggleTheme}
          >
            <div className="flex flex-row items-center gap-3">
              <div>Night Mode</div>
              <SlIcon name="moon" />
            </div>
          </SlSwitch>
        </div>
      </SlDrawer>
    </div>
  );
}

export default MenuDrawer;
