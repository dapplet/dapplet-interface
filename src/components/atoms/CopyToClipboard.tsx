import {
  SlAlert,
  SlIcon,
  SlIconButton,
  SlTooltip,
} from '@shoelace-style/shoelace/dist/react';
import { useRef } from 'react';

// function showToast(alert: { toast: () => void }) {
//   alert.toast();
// }

function CopyToClipboard({ text }: { text: string }) {
  const primary = useRef(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text || '');
    console.info('copied to clipboard');
    //@ts-ignore
    primary.current && primary.current.toast();
  };

  return (
    <>
      <SlTooltip content="Copy" placement="top">
        <SlIconButton name="clipboard" onClick={copyToClipboard} />
      </SlTooltip>
      <SlAlert
        ref={primary}
        variant="success"
        duration={1000}
        closable={false}
        className={`primary`}
      >
        <SlIcon
          slot="icon"
          name="clipboard-check-fill"
          style={{ color: 'var(--sl-color-primary-600)' }}
        />
        Copied!
      </SlAlert>
    </>
  );
}

export default CopyToClipboard;
