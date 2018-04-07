import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

AnswerButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

AnswerButton.defaultProps = {
  onPress: () => {},
  title: ''
}

export default function AnswerButton (props) {
  const { style, title, ...rest } = props
  return (
    <TouchableOpacity style={[styles.button, style]} {...rest}>
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
