import React from 'react'
import { shallow } from 'enzyme'
import FilterScreen from './FilterScreen'

const results = {
  jobs: [
    {
      educationRequired: 'Bachelors',
      name: 'Nurse',
      salary: 50000,
      score: 1
    },
    {
      educationRequired: 'Bachelors',
      name: 'Therapist',
      salary: 50000,
      score: 0
    },
    {
      educationRequired: 'Bachelors',
      name: 'Agent',
      salary: 50000,
      score: 0
    },
    {
      educationRequired: 'Bachelors',
      name: 'Hotel Manager',
      salary: 80000,
      score: 1
    }
  ],
  name: 'Results'
}

const createFilterScreen = (override) => {
  const props = {...override}

  return shallow(<FilterScreen {...props} />)
}

describe('FilterScreen', () => {
  const component = createFilterScreen()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  describe('Min Salary', () => {
    it('has a header for min salary', () => {
      expect(component.find('Header').at(0).props().text).toBe('Minimum Salary')
    })

    it('sets state for min salary using slider', () => {
      component.find('Slider').at(0).props().onValueChange(20000)
      expect(component.state().minSalary).toBe(20000)
    })

    it('sets min salary text', () => {
      component.update()
      expect(component.find('Text').at(0).props().children).toBe(20000)
    })
  })

  describe('Max Salary', () => {
    it('has a header for min salary', () => {
      expect(component.find('Header').at(1).props().text).toBe('Maximum Salary')
    })

    it('sets state for min salary using slider', () => {
      component.find('Slider').at(1).props().onValueChange(100000)
      expect(component.state().maxSalary).toBe(100000)
    })

    it('sets min salary text', () => {
      component.update()
      expect(component.find('Text').at(1).props().children).toBe(100000)
    })
  })

  describe('Education', () => {
    it('has a header for education', () => {
      expect(component.find('Header').at(2).props().text).toBe('Education')
    })

    it('sets state for education using picker', () => {
      component.find('Picker').props().onValueChange('Masters')
      expect(component.state().education).toBe('Masters')
    })
  })

  describe('handleFilterPressed', () => {
    it('navigates to careers list with results', () => {
      const navMock = jest.fn()
      const component = createFilterScreen({
        navigation: {
          navigate: navMock
        }
      })
      component.find('IconButton').props().onPress()
      expect(navMock).toHaveBeenCalledWith('CareersList', results)
    })
  })
})
