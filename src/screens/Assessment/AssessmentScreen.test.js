import React from 'react'
import { shallow } from 'enzyme'
import { AssessmentScreen } from './AssessmentScreen'
import { setAssessment } from 'redux/assessments'

const createAssessmentScreen = (override) => {
  const props = {
    assessment: {
      name: 'Doctor'
    },
    ...override
  }

  return shallow(<AssessmentScreen {...props} />)
}

describe('AssessmentScreen', () => {
  const component = createAssessmentScreen()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  describe('componentDidMount', () => {
    jest.mock('AsyncStorage', () => {
      return {
        getItem: () => {
          return Promise.resolve('{"name": "Doctor"}')
        }
      }
    })

    it('dispatches assessment result', done => {
      const dispatchMock = jest.fn()
      const component = createAssessmentScreen({dispatch: dispatchMock})
      component.instance().componentDidMount()
      setTimeout(() => {
        expect(dispatchMock).toHaveBeenCalledWith(setAssessment({name: 'Doctor'}))
        done()
      })
    })
  })

  describe('handleResultPressed', () => {
    it('navigates to results screen', () => {
      const navMock = jest.fn()
      const component = createAssessmentScreen({navigation: {navigate: navMock}})
      component.find('TouchableOpacity').props().onPress()
      expect(navMock).toHaveBeenCalledWith('Result', {jobs: {name: 'Doctor'}, name: 'Results'})
    })
  })

  describe('handleAssessmentPressed', () => {
    it('navigates to assessment screen', () => {
      const navMock = jest.fn()
      const component = createAssessmentScreen({navigation: {navigate: navMock}})
      component.find('IconButton').props().onPress()
      expect(navMock).toHaveBeenCalledWith('Questionnaire')
    })
  })
})
