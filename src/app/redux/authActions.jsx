export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_UPDATE = 'USER_UPDATE';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export const login = data => dispatch => {
  dispatch({type: USER_LOGGED_IN, payload: data.user})
}

export const updateUser = data => dispatch => {
  dispatch({type: USER_UPDATE, payload: data})
}

export const logout = data => dispatch => {
  dispatch({type: USER_LOGGED_OUT})
}
