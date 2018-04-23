import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

export default function HeaderLogo (props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode='contain'
        source={require('../../../assets/header.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    height: 28,
    width: 260,
    alignSelf: 'center'
  }
})
