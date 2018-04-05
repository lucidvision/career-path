import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import jobs from 'data/jobs'

class CategoriesListScreen extends Component {
  static navigationOptions = {
    title: 'Categories'
  }
  handleCategoryPressed = (jobs) => {
    this.props.navigation.navigate('CareersList', jobs)
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.handleCategoryPressed(item)}>
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={jobs}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.name} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: 'grey',
    height: 100,
    justifyContent: 'center',
    padding: 10
  }
})

export default CategoriesListScreen
