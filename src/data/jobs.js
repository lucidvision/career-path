import _ from 'lodash'

const categories = [
  {
    name: 'Medical',
    jobs: [
      {
        name: 'Doctor',
        salary: '100000',
        education: 'MD'
      },
      {
        name: 'Nurse',
        salary: '50000',
        education: 'Bachelors'
      },
      {
        name: 'Therapist',
        salary: '50000',
        education: 'Bachelors'
      }
    ]
  },
  {
    name: 'Tourism',
    jobs: [
      {
        name: 'Tour Guide',
        salary: '30000',
        education: 'MD'
      },
      {
        name: 'Agent',
        salary: '50000',
        education: 'Bachelors'
      },
      {
        name: 'Hotel Manager',
        salary: '80000',
        education: 'Bachelors'
      }
    ]
  }
]

export const jobs = _.reduce(categories, (acc, category) => _.concat(acc, category.jobs), [])

export default categories
