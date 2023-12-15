import { createSlice } from '@reduxjs/toolkit'
const initialState = { counter: 17 }
const counterSlice = createSlice({
  name: 'reducerCounter',
  initialState,
  reducers: {
    counter_increment(state, action) { state.counter = state.counter + action.payload }
  }
})
export const { counter_increment } = counterSlice.actions
export default counterSlice.reducer