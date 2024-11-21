import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading : false
}

export const AppSlice = createSlice({
    name : "app",
    initialState,
    reducers:{

    },
    extraReducers : (builder) => {

    }
})

export const {  } = AppSlice.actions
export default AppSlice.reducer