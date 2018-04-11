import React from 'react'
import { shallow } from 'enzyme'
import CategoriesListScreen from './CategoriesListScreen'

const createCategoriesListScreen = (override) => {
  const props = {...override}

  return shallow(<CategoriesListScreen {...props} />)
}

describe('CategoriesListScreen', () => {
  const component = createCategoriesListScreen()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  describe('renderItem', () => {
    const renderItem = shallow(component.instance().renderItem({item: {name: 'Doctor'}}))

    it('returns the search result item', () => {
      expect(renderItem.find('Text').props().children).toBe('Doctor')
    })
  })

  describe('handleCategoryPressed', () => {
    it('navigates to job screen', () => {
      const navMock = jest.fn()
      const component = createCategoriesListScreen({
        navigation: {
          navigate: navMock
        }
      })
      component.instance().handleCategoryPressed([{name: 'Doctor'}])
      expect(navMock).toHaveBeenCalledWith('CareersList', [{name: 'Doctor'}])
    })
  })
})
