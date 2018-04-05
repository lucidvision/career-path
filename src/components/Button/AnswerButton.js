import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

AnswerButton.propTypes = {
  addStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ]),
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

AnswerButton.defaultProps = {
  addStyle: {},
  title: '',
  onPress: () => {}
}

export default function AnswerButton (props) {
  const { addStyle, title, ...rest } = props
  return (
    <TouchableOpacity style={[styles.button, addStyle]} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 30,
    height: 80,
    justifyContent: 'center',
    padding: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
})
