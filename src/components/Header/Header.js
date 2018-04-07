import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

Header.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ]),
  text: PropTypes.string.isRequired
}

Header.defaultProps = {
  addStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ]),
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
