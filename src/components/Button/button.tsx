import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import ClassNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  /** 设置Button的禁用 */
  disabled?: boolean;
  /** 设置Button大小 */
  size?: ButtonSize | string;
  /** 设置Button的类型 */
  btnType?: ButtonType | string;
  children?: React.ReactNode | string;
  href?: string;
}

// ts类型别名 拿到所有button原生属性(& 交叉类型，也就是组合这些类型)
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
// Partial 把所有属性设置成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * Button 组件
 * ~~~js
 * import {Button} from 'lib'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  // ...restProps 取出剩余的属性
  const {
    btnType,
    disabled,
    size,
    children,
    href,
    className,
    ...restProps
  } = props;
  // btn ,btn-lg ,btn-primary,
  const classes = ClassNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
