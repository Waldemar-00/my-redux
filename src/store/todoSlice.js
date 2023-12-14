import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
const adapter = createEntityAdapter() //! default {ids: [], entities: {}}
const initialState = adapter.getInitialState()
const todoSlice = createSlice({
  name: 'reducerTodo',
  initialState,
  reducers: {
    add_todo(state, action) { adapter.addOne(state, action.payload )}
  }
})
export const { add_todo } = todoSlice.actions
export default todoSlice.reducer