import { createSlice } from '@reduxjs/toolkit'
const initialState = { counter: 17 }
const counterSlice = createSlice({
  name: 'reducerCounter',
  initialState,
  reducers: (create) => ({ //! 'create callback' notation
      counter_increment: create.preparedReducer( number => ({ payload: number * 2 }),
      (state, action) => { state.counter = state.counter + action.payload }
      ), 
    })
  })
export const { counter_increment } = counterSlice.actions
export default counterSlice.reducer