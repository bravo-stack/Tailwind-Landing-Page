import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

export const successSlice = createSlice({
    name: "success",
    initialState,
    reducers: {
        successful: (state) => {
            state.value = true
        },
        notSuccessful: (state) => {
            state.value = false
        }
    }
})

export const { successful, notSuccessful } = successSlice.actions

export default successSlice.reducer