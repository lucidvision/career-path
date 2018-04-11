import React from 'react'
import { shallow } from 'enzyme'
import JobScreen from './JobScreen'

const createJobScreen = (override) => {
  const props = {
    navigation: {
      state: {
        params: {
          name: 'Doctor',
          salary: 100000,
          education: 'MD'
        }
      }
    },
    ...override
  }

  return shallow(<JobScreen {...props} />)
}

describe('JobScreen', () => {
  const component = createJobScreen()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
