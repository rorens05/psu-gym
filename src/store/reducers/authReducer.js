import {
  LOGIN_SUCCESS,
  GET_PROFILE_BY_TOKEN_SUCCESS,
  SET_TOKEN,
} from '../types/types';

const INITIAL_STATE = {
  user: {
    name: 'laurence',
  },
  loginError: null,
  token: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  console.log({action});
  switch (action.type) {
    case LOGIN_SUCCESS:
      let {data} = action.payload;
      if (data.failure != null) {
        return {...state, loginError: data.failure};
      }
      return {
        ...state,
        loginError: null,
        user: data.store_owner,
        token: data.jwt,
      };
    case GET_PROFILE_BY_TOKEN_SUCCESS:
      data = action.payload.data;
      if (data.failure != null) {
        return {...state, loginError: data.failure};
      }
      return {
        ...state,
        loginError: null,
        user: data,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default authReducer;
