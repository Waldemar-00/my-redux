// import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import reducerCounter from './counterSlice'
import reducerArticle from './articleSlice'
import reducerTodo from './todoSlice'
import reducerHeroes from './heroesSlice'
import { configureStore } from '@reduxjs/toolkit'
import { api_slice } from '../API/api_slice'

const stringCustomMiddleware = () => wrapDispatch => handleAction => {
  return typeof handleAction === 'string' ? wrapDispatch({ type: handleAction }) : wrapDispatch(handleAction)
}
// console.log(api_slice)
const store = configureStore({ //!also added: thunk+, composeWithDevTools 
  reducer: {
    [api_slice.reducerPath]: api_slice.reducer,
    counter: reducerCounter,
    article: reducerArticle,
    todo: reducerTodo,
    heroes: reducerHeroes
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringCustomMiddleware, api_slice.middleware ), //! only for example
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat() //! only for example
})
export default store