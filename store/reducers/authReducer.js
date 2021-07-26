import * as actionTypes from "../actions/types";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
