
const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_USERS_REQUEST':
        return { ...state, loading: true };
      case 'LOAD_USERS_SUCCESS':
        return { ...state, loading: false, users: action.payload };
      case 'LOAD_USERS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;