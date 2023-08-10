import {
  SlButton,
  SlIcon,
  SlTooltip,
} from '@shoelace-style/shoelace/dist/react';
import { useTheme } from '../../lib/stores/theme';

function ThemeToggle() {
  const theme = useTheme((state) => state.theme);
  const toggle = useTheme((state) => state.toggle);

  return (
    <SlTooltip content="Theme">
      <SlButton size="small" circle variant="default" outline onClick={toggle}>
        <SlIcon
          name="sun-fill"
          style={{
            color: 'var(--sl-color-neutral)',
            display: theme === 'light' ? '' : 'none',
          }}
        />
        <SlIcon
          name="moon-fill"
          style={{
            color: 'var(--sl-color-neutral)',
            display: theme === 'dark' ? '' : 'none',
          }}
        />
      </SlButton>
    </SlTooltip>
  );
}

export default ThemeToggle;
