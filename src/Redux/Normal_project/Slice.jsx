import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers:{
    additem:(state,action)=>{
      state.push(action.payload);
    }
  }
});

export const { additem } = cartSlice.actions;
export default cartSlice.reducer;