import { createSlice} from "@reduxjs/toolkit";

export const inOutSlice = createSlice({
    name:'inOut',
    initialState:{
       input:'',
       output:'',
    },
    reducers:{
        setInput: (state,action) => {
            state.input = action.payload;
        },
        setOutput: (state,action) => {
            state.output = action.payload;
        },
    }
});


export const {setInput,setOutput} = inOutSlice.actions;
export default inOutSlice;