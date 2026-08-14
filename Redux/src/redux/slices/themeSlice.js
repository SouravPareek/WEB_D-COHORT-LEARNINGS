import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "Theme",
    initialState:{
        value: "Light"
    },
    reducers:{
        changeThemeToLight:(state)=>{
            state.value = "Light"
        },
        changeThemeToDark:(state)=>{
            state.value = "Dark"
        }
    }
})

export const {changeThemeToDark, changeThemeToLight} = themeSlice.actions
export default themeSlice.reducer