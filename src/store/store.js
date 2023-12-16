// import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import reducerCounter from './counterSlice'
import reducerArticle from './articleSlice'
import reducerTodo from './todoSlice'
import reducerHeroes from './heroesSlice'
import { configureStore } from '@reduxjs/toolkit'
const stringCustomMiddleware = () => wrapDispatch => handleAction => {
  return typeof handleAction === 'string' ? wrapDispatch({ type: handleAction }) : wrapDispatch(handleAction)
}
const store = configureStore({ //!also added: thunk+, composeWithDevTools 
  reducer: {
    counter: reducerCounter,
    article: reducerArticle,
    todo: reducerTodo,
    heroes: reducerHeroes
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringCustomMiddleware), //! only for example
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat() //! only for example
})
export default store