import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Fuse from 'fuse.js'
import _ from 'lodash'

class Search extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    onItemPressed: PropTypes.func.isRequired
  }
  state = {
    text: '',
    results: []
  }
  componentDidMount () {
    this.debouncedSearch = _.debounce(this.handleItemSearch, 500)
  }
  handleItemSearch = () => {
    const options = {keys: ['name']}
    const fuse = new Fuse(this.props.data, options)
    const results = fuse.search(this.state.text)
    this.setState({results})
  }
  handleSearchChanged = (text) => {
    this.setState({text})
    this.debouncedSearch()
  }
  handleItemPressed = (item) => {
    this.setState({
      text: '',
      results: []
    })
    this.props.onItemPressed(item)
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.props.onItemPressed(item)} style={styles.listItem}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Search'
          onChangeText={this.handleSearchChanged}
          style={styles.input}
          value={this.state.text} />
        {this.state.results.length > 0 &&
          <View style={styles.list}>
            <FlatList
              data={this.state.results}
              keyExtractor={(item) => item.name}
              renderItem={this.renderItem} />
          </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    zIndex: 1,
    backgroundColor: 'white'
  },
  input: {
    fontSize: 20
  },
  list: {
    flex: 1,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: 'white'
  },
  listItem: {
    height: 40,
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da'
  }
})

export default Search
