import {
  SlButton,
  SlDropdown,
  SlIcon,
  SlMenu,
  SlMenuItem,
} from '@shoelace-style/shoelace/dist/react';
import type { menuItem as item } from '../../lib/constants/menu';
import { sortingMethods } from '../../lib/constants/sort';
import useWindowDimensions from '../../lib/utils/dimensions';

function Sort({ method, setMethod }: { method: item; setMethod: any }) {
  //@ts-ignore
  function handleSelect(event) {
    const selected = event.detail.item;
    for (const sortingMethod of sortingMethods) {
      if (sortingMethod.name === selected.value) {
        setMethod(sortingMethod);
        return;
      }
    }
  }

  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <div className="flex justify-between items-center">
      <SlDropdown>
        <SlButton slot="trigger" caret pill>
          {!isMobile && method.name}
          <SlIcon
            slot="prefix"
            style={{ marginRight: `${isMobile ? '-1rem' : '0'}` }}
            name={method.icon}
          />
        </SlButton>
        <SlMenu onSlSelect={handleSelect}>
          {sortingMethods.map((method, i) => (
            <SlMenuItem value={method.name} key={i}>
              {method.name}
              <SlIcon slot="prefix" name={method.icon} />
            </SlMenuItem>
          ))}
        </SlMenu>
      </SlDropdown>
    </div>
  );
}

export default Sort;
