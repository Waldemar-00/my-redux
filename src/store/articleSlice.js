import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  article: ''
}
// const reducerArticle = (state = initialState, action) => {
  // switch (action.type) {
    // case 'ARTICLE_OPEN': 
      // return {
        // ...state,
        // article: action.payload
      // }  
    // default:
      // return state
  // }
// }
const reducerSlice = createSlice({
  name: 'reducerArticle',
  initialState,
  reducers: {
    article_open(state, action) {
      state.article = action.payload
    }
  }
})
export const { article_open } = reducerSlice.actions
export default reducerSlice.reducer