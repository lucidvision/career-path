import React from 'react'
import { shallow } from 'enzyme'
import CareersListScreen from './CareersListScreen'

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

  describe('renderItem', () => {
    const renderItem = shallow(component.instance().renderItem({item: {name: 'Doctor'}}))

    it('returns the search result item', () => {
      expect(renderItem.find('Text').props().children).toBe('Doctor')
    })
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
