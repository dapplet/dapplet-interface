import { SlButton, SlIcon, SlInput } from '@shoelace-style/shoelace/dist/react';

interface SnippetProps {
  value: string;
}

function CodeSnippet({ value }: SnippetProps) {
  return (
    <SlInput readonly size="large" value={value} className="copy-input">
      <SlButton
        slot="suffix"
        variant="default"
        size="small"
        className="copy-input-btn"
      >
        <SlIcon name="clipboard" />
      </SlButton>
    </SlInput>
  );
}

export default CodeSnippet;
