import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
const adapter = createEntityAdapter()
const initialState = adapter.getInitialState() //! default {ids: [], entities: {}}
const reducerSlice = createSlice({
  name: 'reducerArticle',
  initialState,
  reducers: {
    article_open(state, action) { adapter.setOne(state, action.payload ) }
  }
})
export const { article_open } = reducerSlice.actions
export default reducerSlice.reducer