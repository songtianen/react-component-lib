import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

const defaultMenu = () => (
  <Menu onSelect={action('selected')}>
    <MenuItem>1</MenuItem>
    <MenuItem disabled>2</MenuItem>
    <SubMenu title='dropdown'>
      <MenuItem>1qqqqqq</MenuItem>
      <MenuItem disabled>2qqqqqq</MenuItem>
      <MenuItem>3qqqqq</MenuItem>
    </SubMenu>
    <MenuItem>3</MenuItem>
  </Menu>
);
const defaultMenuItem = () => <MenuItem>MenuItem</MenuItem>;

storiesOf('Menu Component', module)
  .add('Menu', defaultMenu)
  .add('MenuItem', defaultMenuItem);
