// action.js
export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';
// Action Creators
export const loadUsersRequest = () => ({
    type: LOAD_USERS_REQUEST,
  });
  
  export const loadUsersSuccess = (users) => ({
    type: LOAD_USERS_SUCCESS,
    payload: users,
  });
  
  export const loadUsersFailure = (error) => ({
    type: LOAD_USERS_FAILURE,
    payload: error,
  });
  
  // The main loadUsers action
  export const loadUsers = (users) => ({
    type: LOAD_USERS,
    payload: users,
  });