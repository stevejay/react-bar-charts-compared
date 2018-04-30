import { handleActions } from 'redux-actions'

import { types as dataActionTypes } from '../actions/data'

const initialState = {
  barChart: []
}

export default handleActions(
  {
    [dataActionTypes.BAR_CHART_DATA_UPDATED]: (state, action) => ({
      ...state,
      barChart: action.payload.data
    })
  },
  initialState
)
