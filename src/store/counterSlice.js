const initialState = { counter: 17 }
const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      return {
        ...state,
        counter: +state.counter + 1
      }
    default:
      return state
  }
}
export default reducerCounter