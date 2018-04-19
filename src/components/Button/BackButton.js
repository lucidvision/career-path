import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function BackButton (props) {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Ionicons name='ios-arrow-back' size={32} color='black' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10
  }
})
