import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import reducerCounter from './counterSlice'
import reducerArticle from './articleSlice'
import { composeWithDevTools } from '@redux-devtools/extension'
const rootReducer = combineReducers({
  counter: reducerCounter,
  article: reducerArticle
})
const stringCustomMiddleware = storeAPI => wrapDispatch => handleAction => { //! storeAPI({ dispatch, getState }) 
  return typeof handleAction === 'string' ? wrapDispatch({ type: handleAction }) : wrapDispatch(handleAction)
} 
const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(stringCustomMiddleware)) )
export default store