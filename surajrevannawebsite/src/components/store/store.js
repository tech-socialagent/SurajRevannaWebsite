import { configureStore,createSlice } from "@reduxjs/toolkit";

//reducer
export const langSlice=createSlice({
    name:"language",
    initialState:{
        webLanguage:"english"
    },
    reducers:{
        toEnglish: state=>{
            state.webLanguage="english"
        },
        toKannada: state=>{
            state.webLanguage="kannada"
        }
    }
})

// store
export default configureStore({
    reducer:{
        language: langSlice.reducer
    }
})




export const {toEnglish,toKannada}=langSlice.actions;


