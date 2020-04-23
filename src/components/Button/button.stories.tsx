import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonSize, ButtonType } from './button';

const defaultButton = () => (
  <Button onClick={action('clicked')}>defaultButton</Button>
);

const buttonResize = () => (
  <>
    <Button size={ButtonSize.Large}>largeButton</Button>
    <Button size={ButtonSize.Small}>smallButton</Button>
  </>
);
const buttonWithType = () => (
  <>
    <Button btnType={ButtonType.Primary}>primaryButton</Button>
    <Button btnType={ButtonType.Danger}>dangerButton</Button>
    <Button btnType={ButtonType.Link} href='http://www.baidu.com'>
      LinkButton
    </Button>
  </>
);
storiesOf('Button Component', module)
  .add('Button', defaultButton)
  .add('不同尺寸的Button', buttonResize)
  .add('不同类型的Button', buttonWithType);
