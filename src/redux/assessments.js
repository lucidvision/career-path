const SET_ASSESSMENT = 'SET_ASSESSMENT'

export function setAssessment (assessment) {
  return {
    type: SET_ASSESSMENT,
    assessment
  }
}

const initialState = {
  assessment: []
}

export default function assessments (state = initialState, action) {
  switch (action.type) {
    case SET_ASSESSMENT :
      return {
        ...state,
        assessment: action.assessment
      }
    default :
      return state
  }
}
