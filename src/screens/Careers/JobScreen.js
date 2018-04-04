import React, { Component } from 'react'
import { Text, View } from 'react-native'

class JobScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params.name
    }
  }
  render () {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>{params.name}</Text>
        <Text>{`Salary: ${params.salary}`}</Text>
        <Text>{`Education: ${params.education}`}</Text>
      </View>
    )
  }
}

export default JobScreen
