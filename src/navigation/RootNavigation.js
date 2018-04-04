import { StackNavigator, TabNavigator } from 'react-navigation'
import { AssessmentScreen, CategoriesListScreen, CareersScreen, CareersListScreen, FilterScreen, JobScreen,
  QuestionnaireScreen } from 'screens'

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
  }
})

const RootNavigation = TabNavigator({
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
})

export default RootNavigation
