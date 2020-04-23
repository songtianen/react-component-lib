import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem';

// typescript 字符串字面量
type MenuMode = 'horizontal' | 'vertical';
// 类型别名（重用不用写两次了）
type SeleteCallBack = (seletedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SeleteCallBack;
  defaultOpenSubMenus?: string[];
}

// 哪些属性需要context透传
interface MenucontextProps {
  index: string;
  onSelect?: SeleteCallBack;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
// 导出context
export const MenuContext = createContext<MenucontextProps>({ index: '0' });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    onSelect,
    children,
    defaultOpenSubMenus,
  } = props;

  const [currentActive, setActive] = useState(defaultIndex); // 初始index
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  //要传给子组件的属性
  const passedContext: MenucontextProps = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      // 拿到子组件的displayName
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 解决index 可选
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        // 如果不是 childElement类型标签 弹出错误
        console.error('Waring:Menu Component Child is not MenuItem Component');
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid='test-menu'>
      {/* 传入属性给子组件 */}
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
// 默认属性
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
};

export default Menu;
