import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authencation';

export default configureStore({
    reducer:{
        authentication:authSlice
    }
});