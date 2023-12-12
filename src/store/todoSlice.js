import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  toDoArray: []
}
// const reducerTodo = (state = initialState, action) => {
  // switch (action.type) {
    // case 'ADD_TODO':
      // return {
        // ...state,
        // toDoArray: action.payload
      // }
    // default:
      // return state
  // }
// }
const todoSlice = createSlice({
  name: 'reducerTodo',
  initialState,
  reducers: {
    add_todo(state, action) {
      state.toDoArray = action.payload
    }
  }
})
export const { add_todo } = todoSlice.actions
export default todoSlice.reducer