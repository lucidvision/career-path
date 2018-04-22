import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Separator () {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'black',
    height: StyleSheet.hairlineWidth,
    marginHorizontal: 20
  }
})
