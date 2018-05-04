// @flow

import { handleActions } from 'redux-actions'
import type { DataState as State, Action } from '../types'

import { types as dataActionTypes } from '../actions/data'

const initialState: State = {
  people: []
}

export default handleActions(
  {
    [dataActionTypes.DATA_UPDATED]: (state: State, action: Action): State => ({
      ...state,
      people: action.payload
    })
  },
  initialState
)
