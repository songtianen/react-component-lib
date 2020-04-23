var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';
var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, className = _a.className, children = _a.children;
    var context = useContext(MenuContext); // 使用contenxt
    var openSubMenus = context.defaultOpenSubMenus;
    var isOpen = index && context.mode === 'vertical' ? openSubMenus.includes(index) : false;
    var _b = useState(isOpen), menuOpen = _b[0], setOpen = _b[1];
    //  点击
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    // 鼠标
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    // 处理横向与纵向时 分别为 click 与 mouse事件
    var clickEvents = context.mode === 'vertical'
        ? {
            onClick: handleClick,
        }
        : {};
    var hoverEvents = context.mode !== 'vertical'
        ? {
            onMouseEnter: function (e) {
                handleMouse(e, true);
            },
            onMouseLeave: function (e) {
                handleMouse(e, false);
            },
        }
        : {};
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical',
    });
    //  渲染菜单的内容
    var renderChildren = function () {
        var subMenuClasses = classNames('viking-submenu', {
            'menu-opened': menuOpen,
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: index + "-" + i });
            }
            else {
                // 如果不是 childElement类型标签 弹出错误
                console.error('Waring:SubMenu Component Child is not MenuItem Component');
            }
        });
        return (React.createElement(Transition, { in: menuOpen, timeout: 300, animation: 'zoom-in-top' },
            React.createElement("ul", { className: subMenuClasses }, childrenComponent)));
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, hoverEvents),
        React.createElement("div", __assign({ className: 'submenu-title', onClick: handleClick }, clickEvents),
            title,
            React.createElement(Icon, { icon: 'angle-down', className: 'arrow-icon' })),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
