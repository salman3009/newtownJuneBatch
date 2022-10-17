import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../Actions/types';

const initialState ={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    user:null
}

export default function(state=initialState,action){

    const {type,payload} = action;

    switch(type){
        case REGISTER_SUCCESS:
        localStorage.setItem('token',"1234567");
        return{
            ...state,
            ...payload,
            isAuthenticated:true,
            loading:false
        }
        case REGISTER_FAIL:
        localStorage.removeItem('token');
        return {
            ...state,
            token:null,
            isAuthenticated:false,
            loading:false
        }
        default:
        return state;

    }
}