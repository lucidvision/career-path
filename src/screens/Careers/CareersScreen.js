import React, { Component } from 'react'
import { Button, TextInput, StyleSheet, View } from 'react-native'

class Careers extends Component {
  state = {}
  handleCategoriesPressed = () => {
    this.props.navigation.navigate('CategoriesList')
  }
  handleFilterPressed = () => {
    this.props.navigation.navigate('Filter')
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Search' />
        <Button onPress={this.handleCategoriesPressed} title='Categories' />
        <Button onPress={this.handleFilterPressed} title='Filter' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  }
})

export default Careers
