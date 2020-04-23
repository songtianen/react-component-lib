import React from 'react';
import classNames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
export interface InconProps extends FontAwesomeIconProps {
  theme?: ThemeProps | string;
}
const Icon: React.FC<InconProps> = (props) => {
  const { theme, className, ...restPros } = props;
  // 根据Theme来定义 需要的类
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...restPros}></FontAwesomeIcon>;
};

export default Icon;
