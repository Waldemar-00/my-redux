import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import reducerCounter from './counterSlice'
import reducerArticle from './articleSlice'
const rootReducer = combineReducers({
  counter: reducerCounter,
  article: reducerArticle
})
const customStringMiddleware = () => (next) => (action) => {      // the store is the first function ({ dispatch, getState })
  return typeof action === 'string' ? next({ type: action }) : next(action) // next is a dispatch
}
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
const enhancers = applyMiddleware( customStringMiddleware )
const store = legacy_createStore( rootReducer, enhancers )
export default store