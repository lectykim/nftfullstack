import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './Auth';


export default configureStore({
    reducer:{
        counter:counterReducer,
    },
    
    
});