const initialState = {
  toDoArray: []
}
const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        toDoArray: action.payload
      }
    default:
      return state
  }
}
export default reducerTodo