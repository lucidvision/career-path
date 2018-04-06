import _ from 'lodash'

const categories = [
  {
    name: 'Medical',
    jobs: [
      {
        name: 'Doctor',
        salary: 100000,
        educationRequired: 'MD',
        score: 2
      },
      {
        name: 'Nurse',
        salary: 50000,
        educationRequired: 'Bachelors',
        score: 1
      },
      {
        name: 'Therapist',
        salary: '50000',
        educationRequired: 'Bachelors',
        score: 0
      }
    ]
  },
  {
    name: 'Tourism',
    jobs: [
      {
        name: 'Tour Guide',
        salary: 30000,
        educationRequired: 'High School',
        score: 0
      },
      {
        name: 'Agent',
        salary: 50000,
        educationRequired: 'Bachelors',
        score: 0
      },
      {
        name: 'Hotel Manager',
        salary: 80000,
        educationRequired: 'Bachelors',
        score: 1
      }
    ]
  }
]

export const jobs = _.reduce(categories, (acc, category) => _.concat(acc, category.jobs), [])

export default categories
