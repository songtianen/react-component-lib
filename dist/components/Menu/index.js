import Menu from './menu';
import SubMenu from './subMenu';
import MenuItem from './menuItem';
// 类型断言一下
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
