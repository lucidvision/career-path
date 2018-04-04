import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import jobs from 'data/jobs'

class CategoriesScreen extends Component {
  state = {}
  handleCategoryPressed = (category) => {
    this.props.navigation.navigate('Careers', category)
  }
  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.handleCategoryPressed(item)}>
        <View style={styles.container}>
          <Text>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={jobs}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.name} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'grey',
    padding: 10,
    justifyContent: 'center'
  }
})

export default CategoriesScreen
