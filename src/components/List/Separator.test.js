import React from 'react'
import { shallow } from 'enzyme'
import Separator from './Separator'

describe('Separator', () => {
  const component = shallow(<Separator />)

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
