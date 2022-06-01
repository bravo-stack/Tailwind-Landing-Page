import { configureStore  } from "@reduxjs/toolkit"
import successReducer from "./../features/success/successSlice"

export const store = configureStore({
    reducer: {
        success: successReducer,
    },
})