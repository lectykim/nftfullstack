import {createSlice} from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 600*1000;

export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:'',
    },
    reducers:{
        SET_NICK:(state,action)=>{
            state.value = action.payload
        },
        DELETE_NICK:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {SET_NICK,DELETE_NICK} = counterSlice.actions;



export default counterSlice.reducer;