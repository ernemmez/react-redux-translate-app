import { createSlice} from "@reduxjs/toolkit";

export const fromSlice = createSlice({
    name:'from',
    initialState:{
       from:'tr',
    },
    reducers:{
        setFrom: (state,action) => {
            state.from = action.payload;
        },
    }
});


export const {setFrom} = fromSlice.actions;
export default fromSlice;