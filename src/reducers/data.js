// @flow

import { handleActions } from 'redux-actions'
import type { People, DataReducerState as ReducerState, Action } from '../types'

import { types as dataActionTypes } from '../actions/data'

const initialState: ReducerState = {
  people: []
}

export default handleActions(
  {
    [dataActionTypes.DATA_UPDATED]: (
      state: ReducerState,
      action: Action<People>
    ): ReducerState => ({
      ...state,
      people: action.payload
    })
  },
  initialState
)
