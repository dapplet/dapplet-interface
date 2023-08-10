import {
  SlButton,
  SlDropdown,
  SlIcon,
  SlMenu,
  SlMenuItem,
  SlMenuLabel,
  SlTooltip,
} from '@shoelace-style/shoelace/dist/react';

function Settings() {
  return (
    <SlTooltip content="Settings">
      <SlDropdown>
        <SlButton slot="trigger" size="small" circle variant="default" outline>
          <SlIcon
            name="gear-wide-connected"
            style={{
              color: 'var(--sl-color-neutral)',
            }}
          />
        </SlButton>
        <SlMenu>
          <SlMenuLabel>Language</SlMenuLabel>
          <SlMenuItem type="checkbox" checked>
            English
          </SlMenuItem>
          <SlMenuItem type="normal">
            <SlButton
              variant="text"
              href="https://github.com/dapplet/DIPs"
              target="_blank"
            >
              Request
              <SlIcon
                slot="suffix"
                name="arrow-right"
                style={{ color: 'var(--sl-color-default)' }}
              />
            </SlButton>
          </SlMenuItem>
        </SlMenu>
      </SlDropdown>
    </SlTooltip>
  );
}

export default Settings;
