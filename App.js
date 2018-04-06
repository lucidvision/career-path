import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import devTools from 'remote-redux-devtools'
import RootNavigation from 'navigation/RootNavigation'
import assessments from 'redux/assessments'

const store = createStore(assessments, devTools())

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    )
  }
}
