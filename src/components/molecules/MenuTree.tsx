import { menuItem } from '../../lib/constants/menu';
import MenuTreeItem from '../atoms/MenuTreeItem';

interface IMenuTree {
  tree?: menuItem[];
  onClick: (item: menuItem) => void;
}

function MenuTree({ tree, onClick }: IMenuTree) {
  return (
    <div className="menu-tree">
      <div className="menu-node">
        {tree?.map((item, i) => (
          <div key={i} onClick={() => onClick(item)}>
            <MenuTreeItem item={item} i={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuTree;
