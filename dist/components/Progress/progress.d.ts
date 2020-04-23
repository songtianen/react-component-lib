import React, { FC } from 'react';
import { ThemeProps } from '../Icon/icon';
export interface ProgreeProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
}
declare const Progress: FC<ProgreeProps>;
export default Progress;
