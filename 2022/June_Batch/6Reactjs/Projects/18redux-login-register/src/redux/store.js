import {configureStore} from '@reduxjs/toolkit';
import { configure } from '@testing-library/react';
import authSlice from './authencation';

export default configureStore({
    reducer:{
        authentication:authSlice
    }
});


