import { SlAlert, SlIcon } from '@shoelace-style/shoelace/dist/react';
import { useMemo, useRef } from 'react';

function TxToast({ state }: { state: any }) {
  const failed = useRef(null);

  useMemo(() => {
    if (state.status === 'Fail' || state.status === 'Exception') {
      //@ts-ignore
      failed.current && failed.current.toast();
    }
  }, [state]);

  return (
    <>
      <SlAlert
        ref={failed}
        variant="danger"
        closable
        duration={10000}
        className={`toast danger`}
      >
        <SlIcon
          slot="icon"
          name="exclamation-octagon"
          style={{ color: 'var(--sl-color-danger-600)' }}
        />
        Failed: {state?.errorMessage}
      </SlAlert>
    </>
  );
}

export default TxToast;

/* 

(tx_state.status === 'Success' && 'Success!')}

*/
