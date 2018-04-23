import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './ListItem'

const createListItem = (override) => {
  const props = {
    item: {name: 'Rainbow'},
    onItemPressed: () => {},
    ...override
  }

  return shallow(<ListItem {...props} />)
}

describe('ListItem', () => {
  const component = createListItem()

  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('triggers callback on press', () => {
    const mockOnItemPressed = jest.fn()
    const component = createListItem({onItemPressed: mockOnItemPressed})
    const touchableOpacity = component.find('TouchableOpacity')
    touchableOpacity.props().onPress()
    expect(mockOnItemPressed).toHaveBeenCalledWith({name: 'Rainbow'})
  })
})
