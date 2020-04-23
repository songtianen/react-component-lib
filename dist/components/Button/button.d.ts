import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
export declare enum ButtonSize {
    Large = "lg",
    Small = "sm"
}
export declare enum ButtonType {
    Primary = "primary",
    Default = "default",
    Danger = "danger",
    Link = "link"
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
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Button 组件
 * ~~~js
 * import {Button} from 'lib'
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export default Button;
