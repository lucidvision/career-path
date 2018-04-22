import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ListItem } from 'components'

class CareersListScreen extends Component {
  handleJobPressed = (job) => {
    this.props.navigation.navigate('Job', job)
  }
  renderItem = ({item}) => {
    return (
      <ListItem item={item} onItemPressed={this.handleJobPressed} />
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.navigation.state.params.jobs}
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

export default CareersListScreen
