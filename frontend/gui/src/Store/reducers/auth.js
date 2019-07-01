import * as actionTypes from '../actions/actionTypes';
import updatedObject from '../utility'

const initialState = {
  error: null,
  loading: false,
  token: null,
  useremail: '',
  username: ''
}

const authStart = (state, action) => {
  return updatedObject(state, {
    error: null,
    loading: true,
  })
}

const authSuccess = (state, action) => {
  return updatedObject(state, {
    error: null,
    loading: true,
    token: action.token,
    username: action.username,
    useremail: action.useremail
  })
}

const authFail = (state, action) => {
  return updatedObject(state, {
    error: action.error,
    loading: false,
  })
}

const authLogout = (state, action) => {
  return updatedObject(state, {
    token: null,
  })
}

const reducer = ( state = initialState, action ) => {
  switch(action.type) {
    case actionTypes.AUTH_START: return authStart(state, action); 
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAIL: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    default:
      return state;
  }
}

export default reducer;