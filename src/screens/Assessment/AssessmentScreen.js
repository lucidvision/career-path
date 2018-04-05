import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton } from 'components'
import { Entypo } from '@expo/vector-icons'

class AssessmentScreen extends Component {
  static navigationOptions = {
    title: 'Career Path'
  }
  handleAssessmentPressed = () => {
    this.props.navigation.navigate('Questionnaire')
  }
  render () {
    return (
      <View style={styles.container}>
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
  }
})

export default AssessmentScreen
