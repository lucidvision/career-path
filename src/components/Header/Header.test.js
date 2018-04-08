import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

const createHeader = (override) => {
  const props = {
    text: '',
    ...override
  }

  return shallow(<Header {...props} />)
}

describe('Header', () => {
  const component = createHeader()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('displays text', () => {
    const component = createHeader({text: 'Rainbow'})
    expect(component.find('Text').props().children).toBe('Rainbow')
  })
})
