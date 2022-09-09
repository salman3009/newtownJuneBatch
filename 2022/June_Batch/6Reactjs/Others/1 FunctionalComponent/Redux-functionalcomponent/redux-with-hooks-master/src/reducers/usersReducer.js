const initialState = {
    usersList : [],
    loading : true,
    error: false,
  };

function usersReducer(state = initialState, action) {
     
    switch (action.type) {
        case 'LOAD_USERS':
            return { ...state, usersList:[], error: false, loading: true }
        case 'GET_USERS':
          return { ...state, usersList: action.payload, error: false, loading: false }
        case 'ERROR_USERS':
          return { ...state, usersList: [], error: true, loading: false }
          default:          
        return state;
    }
  };
  export default usersReducer;