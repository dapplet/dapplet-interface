import {
  SlButton,
  SlButtonGroup,
  SlDivider,
  SlIcon,
  SlTooltip,
} from '@shoelace-style/shoelace/dist/react';
import { useNavigate } from 'react-router-dom';
import { menuItems as items, menuItem } from '../../lib/constants/menu';
import ThemeToggle from '../molecules/ThemeToggle';
import Settings from '../organisms/Settings';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div id="sidebar">
      <a
        className="sidebar-logo"
        href="https://dapplet.app"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row gap-2 items-center justify-center">
          <img src="/dapplet-logo.png" alt="logo" className="h-10 w-10" />
          <h1>Dapplet</h1>
        </div>
      </a>
      {/* tree items */}
      <div className="flex flex-col justify-between h-full">
        <div className="sidebar-items">
          <SlDivider className="m-0" />
          {items[0].items
            ?.filter((item: menuItem) => item.link || item.href)
            .map((item: menuItem, i) => (
              <div key={i}>
                <div>
                  {item.link && (
                    <SlButton
                      size="large"
                      variant={
                        window.location.pathname === item.link
                          ? 'primary'
                          : 'default'
                      }
                      outline
                      onClick={() => {
                        item.link && navigate(item.link);
                      }}
                      className="sidebar-link"
                    >
                      <SlIcon
                        name={item.icon}
                        slot="prefix"
                        style={{
                          color:
                            window.location.pathname === item.link
                              ? 'var(--sl-color-default)'
                              : 'var(--sl-color-neutral)',
                        }}
                      />
                      {item.name}
                    </SlButton>
                  )}
                  {item.href && (
                    <SlButton
                      variant={
                        window.location.pathname === item.link
                          ? 'primary'
                          : 'default'
                      }
                      outline
                      href={item.href}
                      target="_blank"
                    >
                      <SlIcon
                        name={item.icon}
                        slot="prefix"
                        style={{
                          color:
                            window.location.pathname === item.link
                              ? 'var(--sl-color-default)'
                              : 'var(--sl-color-neutral)',
                        }}
                      />
                      {item.name}
                    </SlButton>
                  )}
                </div>
              </div>
            ))}
        </div>
        <div>
          <SlDivider className="m-0" />
          <div className="flex flex-row items-center w-full justify-between p-3">
            <Settings />
            {items[0].items?.map((item: menuItem, k) => (
              <div key={k}>
                {item.items && item.name === 'Resources' && (
                  <SlButtonGroup className="sidebar-resources">
                    {item.items?.map((i: menuItem, j) => (
                      <SlTooltip content={i.name} key={j}>
                        <SlButton
                          variant="default"
                          outline
                          size="small"
                          href={i.href}
                          target="_blank"
                          pill
                        >
                          <SlIcon
                            name={i.icon}
                            style={{ color: 'var(--sl-color-neutral)' }}
                          />
                        </SlButton>
                      </SlTooltip>
                    ))}
                  </SlButtonGroup>
                )}
              </div>
            ))}
            {/* Small darkmode switch */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
