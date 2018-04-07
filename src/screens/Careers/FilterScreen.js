import React, { Component } from 'react'
import { Picker, StyleSheet, Slider, Text, View } from 'react-native'
import { Header, IconButton } from 'components'
import { Feather } from '@expo/vector-icons'
import { jobs } from 'data/jobs'
import _ from 'lodash'

class FilterScreen extends Component {
  static navigationOptions = {
    title: 'Filter'
  }
  state = {
    minSalary: 10000,
    maxSalary: 200000,
    education: 'Bachelors'
  }
  handleFilterPressed = () => {
    const { minSalary, maxSalary, education } = this.state
    if (minSalary || maxSalary || education) {
      const results = _.filter(jobs, job => {
        const { salary, educationRequired } = job
        let keep = true
        if (minSalary && +salary < +minSalary) {
          keep = false
        }
        if (maxSalary && +salary > +maxSalary) {
          keep = false
        }
        if (education && !(education === educationRequired)) {
          keep = false
        }
        return keep
      })
      this.props.navigation.navigate('CareersList', {name: 'Results', jobs: results})
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Header style={styles.verticleSpacing} text='Minimum Salary' />
        <Slider
          maximumValue={100000}
          minimumValue={10000}
          onValueChange={minSalary => this.setState({minSalary})}
          step={1000}
          style={styles.slider}
          value={this.state.minSalary} />
        <Text style={styles.verticleSpacing}>{this.state.minSalary}</Text>
        <Header style={styles.verticleSpacing} text='Maximum Salary' />
        <Slider
          maximumValue={200000}
          minimumValue={10000}
          onValueChange={maxSalary => this.setState({maxSalary})}
          step={1000}
          style={styles.slider}
          value={this.state.maxSalary} />
        <Text style={styles.verticleSpacing}>{this.state.maxSalary}</Text>
        <Header text='Education' />
        <Picker
          style={styles.picker}
          selectedValue={this.state.education}
          onValueChange={education => this.setState({education})}>
          <Picker.Item label='High School' value='High School' />
          <Picker.Item label='Bachelors' value='Bachelors' />
          <Picker.Item label='Masters' value='Masters' />
          <Picker.Item label='PhD' value='PhD' />
        </Picker>
        <IconButton onPress={this.handleFilterPressed} title='Filter'>
          <Feather name='filter' size={25} />
        </IconButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  picker: {
    width: '100%'
  },
  slider: {
    width: '100%'
  },
  verticleSpacing: {
    marginBottom: 20
  }
})

export default FilterScreen
