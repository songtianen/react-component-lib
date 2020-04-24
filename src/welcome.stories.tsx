import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>React 组件库</h1>
        <code>
          npm install vikingship --save
        </code>
      </>
    )
  }, { info : { disable: true }})
