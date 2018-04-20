import React from 'React'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { BackButton } from 'components'
import {
  AssessmentScreen,
  CategoriesListScreen,
  CareersScreen,
  CareersListScreen,
  FilterScreen,
  JobScreen,
  QuestionnaireScreen
} from 'screens'

const CategoriesStack = StackNavigator(
  {
    CategoriesList: {
      screen: CategoriesListScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Categories',
          headerLeft: <BackButton onPress={() => navigation.goBack(null)} />
        }
      }
    },
    CareersList: {
      screen: CareersListScreen,
      navigationOptions: ({ navigation }) => {
        const { params } = navigation.state
        return {
          title: params.name,
          headerLeft: <BackButton onPress={() => navigation.goBack()} />
        }
      }
    },
    Job: {
      screen: JobScreen,
      navigationOptions: ({ navigation }) => {
        const { params } = navigation.state
        return {
          title: params.name,
          headerLeft: <BackButton onPress={() => navigation.goBack()} />
        }
      }
    }
  },
  {
    headerMode: 'none'
  }
)

const FilterStack = StackNavigator(
  {
    Filter: {
      screen: FilterScreen,
      navigationOptions: ({navigation}) => {
        return {
          title: 'Filter',
          headerLeft: <BackButton onPress={() => navigation.goBack(null)} />
        }
      }
    },
    CareersList: {
      screen: CareersListScreen,
      navigationOptions: ({ navigation }) => {
        const { params } = navigation.state
        return {
          title: params.name,
          headerLeft: <BackButton onPress={() => navigation.goBack()} />
        }
      }
    },
    Job: {
      screen: JobScreen,
      navigationOptions: ({ navigation }) => {
        const { params } = navigation.state
        return {
          title: params.name,
          headerLeft: <BackButton onPress={() => navigation.goBack()} />
        }
      }
    }
  },
  {
    headerMode: 'none'
  }
)

const CareersStack = StackNavigator({
  Careers: {
    screen: CareersScreen,
    navigationOptions: {
      title: 'Career Path'
    }
  },
  Categories: {
    screen: CategoriesStack
  },
  Filter: {
    screen: FilterStack
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
    navigationOptions: ({navigation}) => {
      return {
        title: 'Questionnaire',
        headerLeft: <BackButton onPress={() => navigation.goBack()} />
      }
    }
  },
  Result: {
    screen: CareersListScreen,
    navigationOptions: ({ navigation }) => {
      const { params } = navigation.state
      return {
        title: params.name,
        headerLeft: <BackButton onPress={() => navigation.popToTop()} />
      }
    }
  },
  Job: {
    screen: JobScreen,
    navigationOptions: ({ navigation }) => {
      const { params } = navigation.state
      return {
        title: params.name,
        headerLeft: <BackButton onPress={() => navigation.goBack()} />
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
