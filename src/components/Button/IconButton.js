import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

IconButton.defaultProps = {
  onPress: () => {},
  title: ''
}

export default function IconButton (props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      {...props}>
      {props.children}
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    elevation: 4,
    height: 100,
    justifyContent: 'center',
    padding: 10,
    shadowColor: 'rgba(79, 108, 141, 0.5)',
    shadowOffset: {
      height: 8
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    width: 100
  }
})
