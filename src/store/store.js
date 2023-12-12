// import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import reducerCounter from './counterSlice'
import reducerArticle from './articleSlice'
import reducerTodo from './todoSlice'
import reducerHeroes from './heroesSlice'
import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from '@redux-devtools/extension'
// import { thunk } from 'redux-thunk'
// const rootReducer = combineReducers({
  // counter: reducerCounter,
  // article: reducerArticle,
  // todo: reducerTodo,
  // heroes: reducerHeroes
// })
// const stringCustomMiddleware = storeAPI => wrapDispatch => handleAction => { //! storeAPI({ dispatch, getState }) 
  // return typeof handleAction === 'string' ? wrapDispatch({ type: handleAction }) : wrapDispatch(handleAction)
// } 
// const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(stringCustomMiddleware, thunk)) )
const store = configureStore({ //!also added: thunk+, composeWithDevTools 
  reducer: {
    counter: reducerCounter,
    article: reducerArticle,
    todo: reducerTodo,
    heroes: reducerHeroes
  }
})
export default store