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
    screen: CareersScreen
  },
  CategoriesList: {
    screen: CategoriesListScreen
  },
  CareersList: {
    screen: CareersListScreen
  },
  Filter: {
    screen: FilterScreen
  },
  Job: {
    screen: JobScreen
  }
})

const AssessmentStack = StackNavigator({
  Assessment: {
    screen: AssessmentScreen
  },
  Questionnaire: {
    screen: QuestionnaireScreen
  },
  Result: {
    screen: CareersListScreen
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
