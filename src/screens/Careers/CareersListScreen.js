import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

class CareersListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params.name
    }
  }
  handleJobPressed = (job) => {
    this.props.navigation.navigate('Job', job)
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.handleJobPressed(item)}>
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
  },
  item: {
    backgroundColor: 'grey',
    height: 100,
    justifyContent: 'center',
    padding: 10
  }
})

export default CareersListScreen
