import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    login:true
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    restart:(state)=>{
      state.count = 0;
    },
    userincrement:(state,action)=>{
          console.log(action.payload);
      state.count += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement,restart,userincrement} = counterSlice.actions;

export default counterSlice.reducer;
