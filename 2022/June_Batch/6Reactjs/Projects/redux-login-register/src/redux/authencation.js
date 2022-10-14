import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name:"authentication",
    initialState:{
       email:'',
       password:'',
       username:'',
       token:false,
       error:''
    },
    reducers:{
        registerSuccess:(state,action)=>{
             console.log(action.payload);
        },
        registerFailure:(state,action)=>{
            console.log(action.payload);
        },
        loginSuccess:(state,action)=>{
            console.log(action.payload)
        },
        logout:(state,action)=>{
            console.log(action.payload);
        }
    }
});

export const {registerSuccess,registerFailure,loginSuccess,logout} = authSlice.actions;

export default authSlice.reducer;