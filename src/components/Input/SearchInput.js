import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Fuse from 'fuse.js'
import _ from 'lodash'

class SearchInput extends Component {
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
      <TouchableOpacity onPress={() => this.handleItemPressed(item)} style={styles.listItem}>
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
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 10,
    width: '100%',
    zIndex: 1
  },
  input: {
    fontSize: 20
  },
  list: {
    backgroundColor: 'white',
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 50
  },
  listItem: {
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da',
    height: 40,
    padding: 10
  }
})

export default SearchInput
