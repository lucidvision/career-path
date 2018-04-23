import React from 'react'
import { shallow } from 'enzyme'
import CareersScreen from './CareersScreen'

const createCareersScreen = (override) => {
  const props = {...override}

  return shallow(<CareersScreen {...props} />)
}

describe('CareersScreen', () => {
  const navMock = jest.fn()
  const component = createCareersScreen({
    navigation: {
      navigate: navMock
    }
  })

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  describe('handleCategoriesPressed', () => {
    it('navigates to the categories list screen', () => {
      component.find('IconButton').at(0).props().onPress()
      expect(navMock).toHaveBeenCalledWith('Categories')
    })
  })

  describe('handleFilterPressed', () => {
    it('navigates to the filter screen', () => {
      component.find('IconButton').at(1).props().onPress()
      expect(navMock).toHaveBeenCalledWith('Filter')
    })
  })

  describe('handleJobPressed', () => {
    it('navigates to the job screen', () => {
      component.find('SearchInput').props().onItemPressed({name: 'Doctor'})
      expect(navMock).toHaveBeenCalledWith('Job', {name: 'Doctor'})
    })
  })
})
