import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
  isReady: boolean;
}

const initialState: CounterState = {
  counter: 10,
  isReady: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;
      state.counter = action.payload;
      state.isReady = true;
    },
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      if (state.counter === 0) return;
      state.counter -= 1;
    },
    resetCount: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;
      state.counter = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});
export const {
  initCounterState,
  increment,
  decrement,
  resetCount,
  incrementByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
