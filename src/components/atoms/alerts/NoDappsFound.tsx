import { SlAlert, SlIcon } from '@shoelace-style/shoelace/dist/react';

function NoDappsFound() {
  return (
    <SlAlert variant="danger" open>
      <SlIcon slot="icon" name="exclamation-triangle" />
      <strong>You have no dapps!</strong>
    </SlAlert>
  );
}

export default NoDappsFound;
