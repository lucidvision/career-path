import { StackNavigator, TabNavigator } from 'react-navigation'
import { CategoriesScreen, CareersScreen, JobScreen, AssessmentScreen, QuestionnaireScreen } from 'screens'

const CareersStack = StackNavigator({
  Categories: {
    screen: CategoriesScreen
  },
  Careers: {
    screen: CareersScreen
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
