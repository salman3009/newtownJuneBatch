import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
// other reducers needs to add here

const rootReducers = combineReducers({    
    usersData : usersReducer      
});
export default rootReducers;