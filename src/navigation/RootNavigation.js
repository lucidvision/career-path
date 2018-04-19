import React from 'React'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import {
  AssessmentScreen,
  CategoriesListScreen,
  CareersScreen,
  CareersListScreen,
  FilterScreen,
  JobScreen,
  QuestionnaireScreen
} from 'screens'

const CareersStack = StackNavigator({
  Careers: {
    screen: CareersScreen,
    navigationOptions: {
      title: 'Career Path'
    }
  },
  CategoriesList: {
    screen: CategoriesListScreen,
    navigationOptions: {
      title: 'Categories'
    }
  },
  CareersList: {
    screen: CareersListScreen,
    navigationOptions: ({ navigation }) => {
      const { params } = navigation.state
      return {
        title: params.name
      }
    }
  },
  Filter: {
    screen: FilterScreen,
    navigationOptions: {
      title: 'Filter'
    }
  },
  Job: {
    screen: JobScreen,
    navigationOptions: ({ navigation }) => {
      const { params } = navigation.state
      return {
        title: params.name
      }
    }
  }
})

const AssessmentStack = StackNavigator({
  Assessment: {
    screen: AssessmentScreen,
    navigationOptions: {
      title: 'Career Path'
    }
  },
  Questionnaire: {
    screen: QuestionnaireScreen,
    navigationOptions: {
      title: 'Questionnaire'
    }
  },
  Result: {
    screen: CareersListScreen,
    navigationOptions: ({ navigation }) => {
      const { params } = navigation.state
      return {
        title: params.name
      }
    }
  }
})

const RootNavigation = TabNavigator(
  {
    Careers: {
      screen: CareersStack,
      navigationOptions: {
        tabBarLabel: 'Careers'
      }
    },
    Assessment: {
      screen: AssessmentStack,
      navigationOptions: {
        tabBarLabel: 'Assessment'
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Careers') {
          iconName = `ios-briefcase${focused ? '' : '-outline'}`
        } else if (routeName === 'Assessment') {
          iconName = `ios-document${focused ? '' : '-outline'}`
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    })
  }
)

export default RootNavigation
