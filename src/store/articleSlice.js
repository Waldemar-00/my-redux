import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  article: ''
}
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