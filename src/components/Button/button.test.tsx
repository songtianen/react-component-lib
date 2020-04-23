import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './button';

// 测试事件函数
const defaultProps = {
  onClick: jest.fn(),
};

// 测试Props

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

// 分类
describe('test Button Compnent', () => {
  it('default button', () => {
    const wraper = render(<Button {...defaultProps}>e</Button>);
    const element = wraper.getByText('e');
    expect(element).toBeInTheDocument();
    // 是不是一个button
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    // 测试Click方法
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('test button different props', () => {
    const wraper = render(<Button {...testProps}>e</Button>);
    const element = wraper.getByText('e');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  });
  it('test button Link', () => {
    const wraper = render(
      <Button btnType={ButtonType.Link} href='http://www.baidu.com'>
        Link
      </Button>,
    );
    const element = wraper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('test button diabled', () => {
    const wraper = render(<Button {...disabledProps}>e</Button>);
    const element = wraper.getByText('e') as HTMLButtonElement;
    // 类型断言变成一个button类型
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    // 测试Click方法
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
