import { legacy_createStore, combineReducers } from 'redux'
import reducerCounter from './counterSlice'
import reducerArticle from './articleSlice'
const rootReducer = combineReducers({
  counter: reducerCounter,
  article: reducerArticle
})
const store = legacy_createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store