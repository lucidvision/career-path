import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { jobs } from 'data/jobs'
import _ from 'lodash'

class FilterScreen extends Component {
  state = {
    minSalary: '',
    maxSalary: '',
    educationLevel: ''
  }
  handleFilterPressed = () => {
    const results = _.filter(jobs, job => {
      const { salary, education } = job
      const { minSalary, maxSalary, educationLevel } = this.state
      return +salary > +minSalary && +salary < +maxSalary && education === educationLevel
    })
    this.props.navigation.navigate('CareersList', {jobs: results})
  }
  render () {
    return (
      <View>
        <View>
          <Text>Salary Range</Text>
          <TextInput
            onChangeText={minSalary => this.setState({minSalary})}
            placeholder='Minimum'
            value={this.state.minSalary} />
          <TextInput
            onChangeText={maxSalary => this.setState({maxSalary})}
            placeholder='Maximum'
            value={this.state.maxSalary} />
        </View>
        <View>
          <Text>Education</Text>
          <TextInput
            onChangeText={educationLevel => this.setState({educationLevel})}
            placeholder='Type'
            value={this.state.educationLevel} />
        </View>
        <Button onPress={this.handleFilterPressed} title='Filter' />
      </View>
    )
  }
}

export default FilterScreen
