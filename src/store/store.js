import { legacy_createStore } from 'redux'
const initialState = { counter: 17 }
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      return {
        ...state,
        counter: +state.counter + 1
      }
    default: return state
  }
}
const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store