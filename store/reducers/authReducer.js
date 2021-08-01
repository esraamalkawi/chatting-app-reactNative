import * as actionTypes from "../actions/types";

const initialState = {
  user: null,
  allUsers: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
