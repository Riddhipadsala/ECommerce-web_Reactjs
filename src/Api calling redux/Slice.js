import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

export const fetchdata=createAsyncThunk("fetchdata",async()=>{
  const data=await fetch("https://jsonplaceholder.typicode.com/todos")
  return data.json();
})

const slice=createSlice({
  name:"todo",
  initialState:{
    data:null,
    isLoading:false,
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchdata.pending,(state,action)=>{
      state.isLoading=true;
     });
    builder.addCase(fetchdata.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.data=action.payload;
    });
    
  }
  
})

export default slice.reducer;
