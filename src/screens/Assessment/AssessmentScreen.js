import React, { Component } from 'react'
import { Alert, AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconButton } from 'components'
import { Entypo } from '@expo/vector-icons'
import _ from 'lodash'

class AssessmentScreen extends Component {
  static navigationOptions = {
    title: 'Career Path'
  }
  state = {
    result: []
  }
  async componentDidMount () {
    try {
      const result = await AsyncStorage.getItem('assessmentResult')
      const resultArray = JSON.parse(result)
      this.setState({
        result: resultArray
      })
    } catch (error) {
      Alert(error)
    }
  }
  handleResultPressed = () => {
    this.props.navigation.navigate('Result', {name: 'Results', jobs: this.state.result})
  }
  handleAssessmentPressed = () => {
    this.props.navigation.navigate('Questionnaire')
  }
  render () {
    return (
      <View style={styles.container}>
        {!_.isEmpty(this.state.result) &&
          <TouchableOpacity onPress={this.handleResultPressed} style={styles.card}>
            <Text>{`You have ${this.state.result.length} job matches!`}</Text>
          </TouchableOpacity>}
        <IconButton onPress={this.handleAssessmentPressed} title='Start'>
          <Entypo name='text-document' size={25} />
        </IconButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  card: {
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10
  }
})

export default AssessmentScreen
