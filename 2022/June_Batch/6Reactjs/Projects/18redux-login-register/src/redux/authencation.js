import {createSlice} from '@reduxjs/toolkit';


createSlice({name:"",initial:{},reducer:{register:()=>{},login:()=>{}}})

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
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.username = action.payload.username;
        },
        registerFailure:(state,action)=>{
            console.log(action.payload);
        },
        loginSuccess:(state,action)=>{
           state.token = true;
        },
        logout:(state)=>{
            state.token = false;
            state.email="";
            state.password="";
            state.username="";
        }
    }
});

export const {registerSuccess,registerFailure,loginSuccess,logout} = authSlice.actions;

export default authSlice.reducer;