import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import reducerCounter from './counterSlice'
import reducerArticle from './articleSlice'
import reducerTodo from './todoSlice'
import { composeWithDevTools } from '@redux-devtools/extension'
const rootReducer = combineReducers({
  counter: reducerCounter,
  article: reducerArticle,
  todo: reducerTodo
})
const stringCustomMiddleware = storeAPI => wrapDispatch => handleAction => { //! storeAPI({ dispatch, getState }) 
  return typeof handleAction === 'string' ? wrapDispatch({ type: handleAction }) : wrapDispatch(handleAction)
} 
const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(stringCustomMiddleware)) )
export default store