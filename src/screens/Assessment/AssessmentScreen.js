import React, { Component } from 'react'
import { Button, View } from 'react-native'

class AssessmentScreen extends Component {
  state = {}
  handleAssessmentPressed = () => {
    this.props.navigation.navigate('Questionnaire')
  }
  render () {
    return (
      <View>
        <Button onPress={this.handleAssessmentPressed} title='Start Assessment' />
      </View>
    )
  }
}

export default AssessmentScreen
