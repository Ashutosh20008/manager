import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT, CLEAR_ERRORS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        user: action.payload,
        error: null
      };
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: null
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  };
};
