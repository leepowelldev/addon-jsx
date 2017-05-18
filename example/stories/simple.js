import React from 'react'
import { storiesOf } from '@kadira/storybook'

const Simple = ({ children }) => (
  <div><span>Hello</span>{children ? () => <div>chidren</div> : null}</div>
)

const Comp = ({ elements, children }) => (
  <div>
    {elements.map(children)}
  </div>
)
const options = [{ name: 'register', label: 'Registered' }, { name: 'done', label: 'Delivered' }]

export default () =>
  storiesOf('Simple Test', module)
    .addWithJSX('No children - No options', () => <Simple />)
    .addWithJSX('No children - Rename', () => <Simple />, {
      displayName: 'Renamed',
    })
    .addWithJSX('With children - No options', () => (
      <Simple>
        <span>World</span>
      </Simple>
    ))
    .addWithJSX(
      'With children - Skip',
      () => (
        <Simple>
          <span>World</span>
        </Simple>
      ),
      { skip: 1 },
    )
    .addWithJSX(
      'With children - Skip and rename',
      () => (
        <Simple>
          <span>World</span>
        </Simple>
      ),
      { skip: 1, displayName: 'Renamed' },
    )
    .addWithJSX('Base', () => (
      <Comp elements={options}>
        {option => <div key={option.name}>{option.label}</div>}
      </Comp>
    ))
