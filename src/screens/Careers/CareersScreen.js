import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

class CareersScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params.name
    }
  }
  static propTypes = {}
  state = {}
  handleJobPressed = (job) => {
    this.props.navigation.navigate('Job', job)
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.handleCategoryPressed(item)}>
        <View style={styles.container}>
          <Text>
            {item.name}
          </Text>
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
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

export default CareersScreen
