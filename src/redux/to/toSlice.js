import { createSlice} from "@reduxjs/toolkit";

export const toSlice = createSlice({
    name:'to',
    initialState:{
       to:'en',
    },
    reducers:{
        setTo: (state,action) => {
            state.to = action.payload;
        },
    }
});


export const {setTo} = toSlice.actions;
export default toSlice;