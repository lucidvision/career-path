import assessments, { setAssessment } from './assessments'

describe('assessments', () => {

  describe('actions', () => {
    describe('setAssessment', () => {
      it('returns the action type and assessment', () => {
        expect(setAssessment([{name: 'Doctor'}])).toEqual({
          type: 'SET_ASSESSMENT',
          assessment: [{name: 'Doctor'}]
        })
      })
    })
  })

  describe('reducer', () => {
    it('fetches and sets assessments data', () => {
      expect(assessments([], {type: 'SET_ASSESSMENT', assessment: [{name: 'Doctor'}]})).toEqual({assessment: [{name: 'Doctor'}]})
    })

    it('returns default state', () => {
      expect(assessments([], {})).toEqual([])
    })
  })
})
