import React from 'react'
import { shallow } from 'enzyme'
import HeaderLogo from './HeaderLogo'

describe('HeaderLogo', () => {
  const component = shallow(<HeaderLogo />)

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
