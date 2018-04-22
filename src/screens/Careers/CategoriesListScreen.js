import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ListItem } from 'components'
import jobs from 'data/jobs'

class CategoriesListScreen extends Component {
  handleCategoryPressed = (jobs) => {
    this.props.navigation.navigate('CareersList', jobs)
  }
  renderItem = ({item}) => {
    return (
      <ListItem item={item} onItemPressed={this.handleCategoryPressed} />
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
  }
})

export default CategoriesListScreen
