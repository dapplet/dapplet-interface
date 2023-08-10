import { SlIcon, SlInput } from '@shoelace-style/shoelace/dist/react';

function Filter({ term, filter }: { term: string; filter: any }) {
  return (
    <>
      <SlInput
        placeholder="0x..."
        clearable
        value={term}
        onSlInput={(e: any) => {
          filter(e.target.value);
        }}
        className="filter"
        pill
      >
        <SlIcon name="search" slot="prefix" />
      </SlInput>
    </>
  );
}

export default Filter;
