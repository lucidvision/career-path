import React from 'react'
import { shallow } from 'enzyme'
import SearchInput from './SearchInput'

const data = [
  {
    name: 'Doctor',
    salary: 100000,
    educationRequired: 'MD',
    score: 2
  },
  {
    name: 'Nurse',
    salary: 50000,
    educationRequired: 'Bachelors',
    score: 1
  },
  {
    name: 'Therapist',
    salary: 50000,
    educationRequired: 'Bachelors',
    score: 0
  }
]

const createSearchInput = (override) => {
  const props = {
    data: [],
    onItemPressed: () => {},
    ...override
  }

  return shallow(<SearchInput {...props} />)
}

describe('SearchInput', () => {
  const component = createSearchInput()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  describe('handleItemSearch', () => {
    it('sets state with the correct results', () => {
      const component = createSearchInput({data})
      component.setState({text: 't'})
      component.instance().handleItemSearch()
      expect(component.state('results')).toEqual([
        {
          name: 'Therapist',
          salary: 50000,
          educationRequired: 'Bachelors',
          score: 0
        }
      ])
    })
  })

  describe('handleSearchChanged', () => {
    component.instance().debouncedSearch = jest.fn()
    component.instance().handleSearchChanged('Rainbow')

    it('sets state with text', () => {
      expect(component.state('text')).toBe('Rainbow')
    })

    it('calls debouncedSearch function', () => {
      expect(component.instance().debouncedSearch).toHaveBeenCalled()
    })
  })

  describe('handleItemPressed', () => {
    const mockOnItemPressed = jest.fn()
    const component = createSearchInput({onItemPressed: mockOnItemPressed})
    component.setState({text: 'Rainbow', results: [{name: 'Therapist'}]})
    component.instance().handleItemPressed({name: 'Doctor'})

    it('resets the state', () => {
      expect(component.state()).toEqual({text: '', results: []})
    })

    it('calls the onItemPressed callback', () => {
      expect(mockOnItemPressed).toHaveBeenCalled()
    })
  })

  describe('renderItem', () => {
    const renderItem = shallow(component.instance().renderItem({item: {name: 'Doctor'}}))

    it('returns the search result item', () => {
      expect(renderItem.find('Text').props().children).toBe('Doctor')
    })
  })

  describe('when typing into search input', () => {
    it('displays the search results', () => {
      const component = createSearchInput({data})
      component.find('TextInput').props().onChangeText('Doc')
      setTimeout(() => {
        expect(component.state('results')).toEqual([{
          name: 'Doctor',
          salary: 100000,
          educationRequired: 'MD',
          score: 2
        }])
      }, 600)
    })
  })
})
