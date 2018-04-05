import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton, SearchInput } from 'components'
import { SimpleLineIcons, Feather } from '@expo/vector-icons'
import { jobs } from 'data/jobs'

class Careers extends Component {
  static navigationOptions = {
    title: 'Career Path'
  }
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
        <SearchInput data={jobs} onItemPressed={this.handleJobPressed} />
        <IconButton onPress={this.handleCategoriesPressed} title='Categories'>
          <SimpleLineIcons name='list' size={25} />
        </IconButton>
        <IconButton onPress={this.handleFilterPressed} title='Filter'>
          <Feather name='filter' size={25} />
        </IconButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    padding: 10
  }
})

export default Careers
