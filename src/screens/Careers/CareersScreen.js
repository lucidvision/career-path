import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Search from 'components/Search'
import { jobs } from 'data/jobs'

class Careers extends Component {
  state = {}
  handleCategoriesPressed = () => {
    this.props.navigation.navigate('CategoriesList')
  }
  handleFilterPressed = () => {
    this.props.navigation.navigate('Filter')
  }
  handleJobPressed = (job) => {
    this.props.navigation.navigate('Job', job)
  }
  render () {
    return (
      <View style={styles.container}>
        <Search data={jobs} onItemPressed={this.handleJobPressed} />
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
