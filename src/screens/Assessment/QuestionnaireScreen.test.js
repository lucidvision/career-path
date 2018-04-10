import React from 'react'
import { shallow } from 'enzyme'
import { QuestionnaireScreen } from './QuestionnaireScreen'
import { setAssessment } from 'redux/assessments'

const result = [
  {
    educationRequired: 'Bachelors',
    name: 'Therapist',
    salary: 50000,
    score: 0
  },
  {
    educationRequired: 'High School',
    name: 'Tour Guide',
    salary: 30000,
    score: 0
  },
  {
    educationRequired: 'Bachelors',
    name: 'Agent',
    salary: 50000,
    score: 0
  }
]

const createQuestionnaireScreen = (override) => {
  const props = {...override}

  return shallow(<QuestionnaireScreen {...props} />)
}

describe('QuestionnaireScreen', () => {
  const component = createQuestionnaireScreen()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  afterEach(() => {
    component.setState({
      currentQuestion: 0,
      answeredQuestions: []
    })
  })

  describe('handleAnswerPressed', () => {
    it('sets state with the answer', () => {
      component.find('AnswerButton').at(0).props().onPress()
      expect(component.state()).toEqual({
        currentQuestion: 1,
        answeredQuestions: [1]
      })
    })
  })

  describe('handleCalculateResult', () => {
    const mockSetItem = jest.fn(() => {
      return Promise.resolve('success')
    })
    jest.mock('AsyncStorage', () => {
      return {
        setItem: mockSetItem
      }
    })

    const dispatchMock = jest.fn()
    const navMock = jest.fn()
    const component = createQuestionnaireScreen({
      dispatch: dispatchMock,
      navigation: {navigate: navMock}
    })
    component.setState({currentQuestion: 2})
    component.find('AnswerButton').at(0).props().onPress()

    it('saves result to storage', () => {
      expect(mockSetItem).toHaveBeenCalled()
    })

    it('resets the state', done => {
      setTimeout(() => {
        expect(component.state()).toEqual({
          currentQuestion: 0,
          answeredQuestions: []
        })
        done()
      })
    })

    it('dispatches results', done => {
      setTimeout(() => {
        expect(dispatchMock).toHaveBeenCalledWith(setAssessment(result))
        done()
      })
    })

    it('navigates to results screen', done => {
      setTimeout(() => {
        expect(navMock).toHaveBeenCalledWith('Result', {name: 'Results', jobs: result})
        done()
      })
    })
  })
})
