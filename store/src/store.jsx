import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";


//counter
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

//user
export const userSlice = createSlice({
  name: "user",
  initialState: {
   userDetail:null
  },
  reducers: {
    saveUser: (state,action) => {
      state.userDetail = action.payload;
      
    },
    clearUser: (state) => {
      state.userDetail = null;
      
    },
  },
});

const { increment, clear } = counterSlice.actions;

//export action for class component
export const { saveUser, clearUser } = userSlice.actions;

//configure store with user and counter reducer
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user:userSlice.reducer,
  },
});

//export hook for functional component
export function useStore() {

  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user.userDetail);
  
  const dispatch = useDispatch();
  
  return {
    count,
    increment: () => dispatch(increment()),
    clear: () => dispatch(clear()),
    user,
    saveUser:(payload)=>dispatch(saveUser(payload)),
    clearUser:()=>dispatch(clearUser())
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
