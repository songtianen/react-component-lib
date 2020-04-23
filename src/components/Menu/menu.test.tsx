import React from 'react';
import {
  render,
  fireEvent,
  RenderResult,
  cleanup,
  wait,
} from '@testing-library/react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
};
const testVerticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
};
const menu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>3</MenuItem>
      <SubMenu title='dropdown'>
        <MenuItem>1</MenuItem>
        <MenuItem disabled>2</MenuItem>
      </SubMenu>
    </Menu>
  );
};
const createStyleFile = () => {
  const cssFile: string = `
    .viking-submenu {
      display: none;
    }
    .viking-submenu.menu-opened {
      display:block;
    }
  `;
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssFile;
  return style;
};
let wraper: RenderResult,
  MenuElement: HTMLElement,
  ActiveElement: HTMLElement,
  disabledElement: HTMLElement;
describe('test menu and menu component', () => {
  beforeEach(() => {
    wraper = render(menu(testProps));
    wraper.container.append(createStyleFile());
    MenuElement = wraper.getByTestId('test-menu'); // 以Id拿到元素
    ActiveElement = wraper.getByText('active');
    disabledElement = wraper.getByText('disabled');
  }); // 每一个case都会跑，通用的函数
  it('menu Props', () => {
    expect(MenuElement).toBeInTheDocument(); // 在文档中
    expect(MenuElement).toHaveClass('viking-menu test'); // 有class
    // expect(MenuElement.getElementsByTagName('li').length).toEqual(3);
    expect(MenuElement.querySelectorAll(':scope > li').length).toEqual(4);
    expect(ActiveElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });
  it('click item', () => {
    const children3 = wraper.getByText('3');
    fireEvent.click(children3); // 点击测试
    expect(children3).toHaveClass('is-active'); //  有这个calss
    expect(ActiveElement).not.toHaveClass('is-active'); // 没有这个class
    expect(testProps.onSelect).toHaveBeenCalledWith('2'); // onSelect被调用
    fireEvent.click(disabledElement); // 点击测试
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1'); // 预期onSelect没有被调用
  });
  it('test mode is vertical have class?', () => {
    cleanup(); // 把以前渲染的元素清除干净
    wraper = render(menu(testVerticalProps));
    const menuElement = wraper.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  });
  it('测试 SubMenu ', async () => {
    expect(wraper.queryByText('1')).not.toBeVisible();
    const dropdownElement = wraper.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement); // 点击测试
    // 当测试异步的时候
    await wait(() => {
      expect(wraper.queryByText('1')).toBeVisible();
    });
    fireEvent.click(wraper.getByText('1'));
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0');
    fireEvent.mouseLeave(dropdownElement);
    // 当测试异步的时候
    await wait(() => {
      expect(wraper.queryByText('1')).not.toBeVisible();
    });
  });
});
