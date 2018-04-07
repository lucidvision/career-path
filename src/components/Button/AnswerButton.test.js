import React from 'react'
import { shallow } from 'enzyme'
import AnswerButton from './AnswerButton'

const createAnswerButton = (override) => {
  const props = {
    onPress: () => {},
    style: {},
    title: '',
    ...override
  }

  return shallow(<AnswerButton {...props} />)
}

describe('AnswerButton', () => {
  const component = createAnswerButton()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  describe('renders the correct output', () => {
    it('displays the correct text', () => {
      const component = createAnswerButton({title: 'Rainbow'})
      expect(component.find('Text').props().children).toBe('Rainbow')
    })

    it('triggers callback on press', () => {
      const mockOnPress = jest.fn()
      const component = createAnswerButton({onPress: mockOnPress})
      const touchableOpacity = component.find('TouchableOpacity')
      touchableOpacity.props().onPress()
      expect(mockOnPress).toHaveBeenCalled()
    })
  })
})
