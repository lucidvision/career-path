import React from 'react'
import { shallow } from 'enzyme'
import Heading from './Heading'

const createHeading = (override) => {
  const props = {
    text: '',
    ...override
  }

  return shallow(<Heading {...props} />)
}

describe('Heading', () => {
  const component = createHeading()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('displays text', () => {
    const component = createHeading({text: 'Rainbow'})
    expect(component.find('Text').props().children).toBe('Rainbow')
  })
})
