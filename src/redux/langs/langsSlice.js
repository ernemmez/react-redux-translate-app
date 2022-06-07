import { createSlice} from "@reduxjs/toolkit";

export const langsSlice = createSlice({
    name:'langs',
    initialState:{
       langs:[],
    },
    reducers:{
        setLangs: (state,action) => {
            state.langs= action.payload;
        },
    }
});


export const {setLangs} = langsSlice.actions;
export default langsSlice;

//[{"code":"en","name":"English"},{"code":"ar","name":"Arabic"},{"code":"az","name":"Azerbaijani"},{"code":"zh","name":"Chinese"},{"code":"cs","name":"Czech"},{"code":"nl","name":"Dutch"},{"code":"fi","name":"Finnish"},{"code":"fr","name":"French"},{"code":"de","name":"German"},{"code":"hi","name":"Hindi"},{"code":"hu","name":"Hungarian"},{"code":"id","name":"Indonesian"},{"code":"ga","name":"Irish"},{"code":"it","name":"Italian"},{"code":"ja","name":"Japanese"},{"code":"ko","name":"Korean"},{"code":"pl","name":"Polish"},{"code":"pt","name":"Portuguese"},{"code":"ru","name":"Russian"},{"code":"es","name":"Spanish"},{"code":"sv","name":"Swedish"},{"code":"tr","name":"Turkish"},{"code":"uk","name":"Ukranian"},{"code":"vi","name":"Vietnamese"}],