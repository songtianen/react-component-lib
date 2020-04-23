import React, { useState, createContext } from 'react';
import classNames from 'classnames';
// 导出context
export var MenuContext = createContext({ index: '0' });
var Menu = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, style = props.style, onSelect = props.onSelect, children = props.children, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1]; // 初始index
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    //要传给子组件的属性
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus,
    };
    var classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    });
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            // 拿到子组件的displayName
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                // 解决index 可选
                return React.cloneElement(childElement, { index: index.toString() });
            }
            else {
                // 如果不是 childElement类型标签 弹出错误
                console.error('Waring:Menu Component Child is not MenuItem Component');
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": 'test-menu' },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
// 默认属性
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: [],
};
export default Menu;
