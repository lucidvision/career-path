import React from 'react'
import { shallow } from 'enzyme'
import IconButton from './IconButton'

const createIconButton = (override) => {
  const props = {
    onPress: () => {},
    title: '',
    ...override
  }

  return shallow(<IconButton {...props} />)
}

describe('IconButton', () => {
  const component = createIconButton()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  describe('renders the correct output', () => {
    it('displays the correct text', () => {
      const component = createIconButton({title: 'Rainbow'})
      expect(component.find('Text').props().children).toBe('Rainbow')
    })

    it('triggers callback on press', () => {
      const mockOnPress = jest.fn()
      const component = createIconButton({onPress: mockOnPress})
      const touchableOpacity = component.find('TouchableOpacity')
      touchableOpacity.props().onPress()
      expect(mockOnPress).toHaveBeenCalled()
    })
  })
})
