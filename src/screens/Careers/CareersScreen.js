import React, { Component } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Search from 'components/Search'
import jobs from 'data/jobs'
import _ from 'lodash'

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
        <Search data={_.reduce(jobs, (acc, category) => _.concat(acc, category.jobs))} onItemPressed={this.handleJobPressed} />
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
