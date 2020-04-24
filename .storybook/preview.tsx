import React from 'react';
import { addDecorator, addParameters,configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../src/styles/index.scss';
const WrapperStyle: React.CSSProperties = {
  padding: '20px 40px',
};
const storyWrapperFun = (storyFn: any) => {
  return (
    <div style={WrapperStyle}>
      {storyFn()}
    </div>
  );
};
addDecorator(storyWrapperFun);
addDecorator(withInfo);
addParameters({ info: { inline: true, header: false } });
const loaderFn = () => {
  const allExports=[require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components',true,/\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports
}
configure(loaderFn,module);
