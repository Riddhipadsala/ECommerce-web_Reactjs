import { configureStore } from '@reduxjs/toolkit'
import likeslice from "./Slices/Likecounter/Likenifile";

export const store = configureStore({
  reducer: {
    counter: likeslice,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


