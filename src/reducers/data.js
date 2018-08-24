import { handleActions } from "redux-actions";
import { types as dataActionTypes } from "../actions/data";

const initialState = {
  people: []
};

export default handleActions(
  {
    [dataActionTypes.DATA_UPDATED]: (state, action) => ({
      ...state,
      people: action.payload
    })
  },
  initialState
);
