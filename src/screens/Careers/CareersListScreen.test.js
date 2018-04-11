import React from 'react'
import { shallow } from 'enzyme'
import { CareersListScreen } from './CareersListScreen'

const createCareersListScreen = (override) => {
  const props = {
    navigation: {
      state: {
        params: {
          jobs: ''
        }
      }
    },
    ...override
  }

  return shallow(<CareersListScreen {...props} />)
}

describe('CareersListScreen', () => {
  const component = createCareersListScreen()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  describe('handleJobPressed', () => {
    it('navigates to job screen', () => {
      const navMock = jest.fn()
      const component = createCareersListScreen({
        navigation: {
          navigate: navMock,
          state: {
            params: {
              jobs: ''
            }
          }
        }
      })
      component.instance().handleJobPressed({name: 'Doctor'})
      expect(navMock).toHaveBeenCalledWith('Job', {name: 'Doctor'})
    })
  })
})
