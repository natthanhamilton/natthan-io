export const USER_UPDATE = 'USER_UPDATE';

export function updateUser( d ) {
  return {
    type: USER_UPDATE,
    payload: d
  }
}