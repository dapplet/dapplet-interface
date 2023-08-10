import { SlCard, SlIcon } from '@shoelace-style/shoelace/dist/react';

function Language() {
  return (
    <SlCard>
      <div slot="header" className="flex flex-row items-center gap-2">
        <SlIcon name="translate" />
        <h3>Language</h3>
      </div>
      Please request a language by opening an issue on{' '}
      <a href="https://github.com/dapplet/DIPs">Github</a>
    </SlCard>
  );
}

export default Language;
