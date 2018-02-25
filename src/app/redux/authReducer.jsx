import * as action from './authActions'

const initialState = false

export default function authReducer(state = initialState, {type, payload}) {
  switch (type) {
    case action.USER_LOGGED_IN:
    case action.USER_UPDATE:
      return Object.assign({}, payload)
    case action.USER_LOGGED_OUT:
      return false
    default:
      return state

  }
}
