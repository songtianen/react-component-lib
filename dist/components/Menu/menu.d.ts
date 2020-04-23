import React from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
declare type SeleteCallBack = (seletedIndex: string) => void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SeleteCallBack;
    defaultOpenSubMenus?: string[];
}
interface MenucontextProps {
    index: string;
    onSelect?: SeleteCallBack;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<MenucontextProps>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
