import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../src/styles/index.scss';

const WrapperStyle: React.CSSProperties = {
  padding: '20px 40px',
};
const storyWrapperFun = (storyFn: any) => {
  return (
    <div style={WrapperStyle}>
      <h3>组件演示</h3>
      {storyFn()}
    </div>
  );
};
addDecorator(storyWrapperFun);
addDecorator(withInfo);
addParameters({ info: { inline: true, header: false } });
