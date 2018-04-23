import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

Heading.propTypes = {
  text: PropTypes.string.isRequired
}

Heading.defaultProps = {
  text: ''
}

export default function Heading (props) {
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
