import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
var MenuItem = function (props) {
    var children = props.children, index = props.index, className = props.className, style = props.style, disabled = props.disabled;
    var context = useContext(MenuContext); // 使用contenxt
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index,
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && typeof index === 'string') {
            context.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
