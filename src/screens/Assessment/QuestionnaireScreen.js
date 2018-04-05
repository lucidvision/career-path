import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

const questions = [
  'Do you like people?',
  'Do you like cleaning?',
  'Do you like studying?'
]

class QuestionnaireScreen extends Component {
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
  }
  render () {
    return (
      <View>
        <Text>{questions[this.state.currentQuestion]}</Text>
        <View>
          <Button title='Agree' onPress={() => this.handleAnswerPressed(1)} />
          <Button title='Neutral' onPress={() => this.handleAnswerPressed(2)} />
          <Button title='Disagree' onPress={() => this.handleAnswerPressed(3)} />
        </View>
        <View>
          <Text>Questions Left: {questions.length - this.state.currentQuestion}</Text>
        </View>
      </View>
    )
  }
}

export default QuestionnaireScreen
