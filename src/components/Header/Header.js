import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

Header.propTypes = {
  text: PropTypes.string.isRequired
}

Header.defaultProps = {
  text: ''
}

export default function Header (props) {
  return (
    <Text style={[styles.text, props.style]}>
      {props.text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
})
