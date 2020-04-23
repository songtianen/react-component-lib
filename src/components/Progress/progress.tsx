import React, { FC } from 'react';
import { ThemeProps } from '../Icon/icon';

export interface ProgreeProps {
  percent: number;
  // 高度
  strokeHeight?: number;
  // 是否显示里面的文字
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

const Progress: FC<ProgreeProps> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props;
  return (
    <div className='viking-progress-bar' style={styles}>
      <div
        className='viking-progress-bar-outer'
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`viking-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className='inner-text'>{`${percent}`}</span>}
        </div>
      </div>
    </div>
  );
};

// 设置默认的属性
Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
};
export default Progress;
