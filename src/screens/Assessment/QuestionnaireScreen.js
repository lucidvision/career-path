import React, { Component } from 'react'
import { Alert, AsyncStorage, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { AnswerButton } from 'components'
import { setAssessment } from 'redux/assessments'
import { jobs } from 'data/jobs'
import _ from 'lodash'

const questions = [
  'Do you like people?',
  'Do you like cleaning?',
  'Do you like studying?'
]

class QuestionnaireScreen extends Component {
  static navigationOptions = {
    title: 'Questionnaire'
  }
  state = {
    currentQuestion: 0,
    answeredQuestions: []
  }
  handleAnswerPressed = (answer) => {
    const currentQuestion = this.state.currentQuestion + 1
    const answeredQuestions = [...this.state.answeredQuestions, answer]
    this.setState({
      currentQuestion,
      answeredQuestions
    })
    if (currentQuestion === questions.length) {
      this.handleCalculateResult(answeredQuestions)
    }
  }
  handleCalculateResult = async (answeredQuestions) => {
    const result = _.reduce(jobs, (acc, job) => {
      if (answeredQuestions[job.score] === 1) {
        acc.push(job)
      }
      return acc
    }, [])
    const resultString = JSON.stringify(result)
    try {
      await AsyncStorage.setItem('assessmentResult', resultString)
    } catch (error) {
      Alert(error)
    }
    this.setState({currentQuestion: 0, answeredQuestions: []})
    this.props.dispatch(setAssessment(result))
    this.props.navigation.navigate('Result', {name: 'Results', jobs: result})
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.verticleSpacing]}>{questions[this.state.currentQuestion]}</Text>
        <View>
          <AnswerButton
            style={styles.verticleSpacing}
            onPress={() => this.handleAnswerPressed(1)}
            title='Agree' />
          <AnswerButton
            style={styles.verticleSpacing}
            onPress={() => this.handleAnswerPressed(2)}
            title='Neutral' />
          <AnswerButton
            style={styles.verticleSpacing}
            onPress={() => this.handleAnswerPressed(3)}
            title='Disagree' />
        </View>
        <View style={styles.verticleSpacing}>
          <Text style={styles.text}>Questions Left: {questions.length - this.state.currentQuestion}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  verticleSpacing: {
    marginBottom: 20
  },
  text: {
    textAlign: 'center'
  }
})

export default connect()(QuestionnaireScreen)
