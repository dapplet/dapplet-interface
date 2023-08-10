import { SlIcon } from '@shoelace-style/shoelace/dist/react';
import type { menuItem as item } from '../../lib/constants/menu';

interface MenuTreeItemProps {
  item: item;
  i: number;
}

function MenuTreeItem({ item, i }: MenuTreeItemProps) {
  return (
    <div key={i} className="menu-drawer-item">
      <div className="flex flex-row items-center gap-3">
        <SlIcon name={item.icon} />
        {item.name}
      </div>
      {(item.items || item.opens) && <SlIcon name="chevron-right" />}
    </div>
  );
}

export default MenuTreeItem;
