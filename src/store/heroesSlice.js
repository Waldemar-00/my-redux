import { createSlice } from '@reduxjs/toolkit'
import  { asyncThunkFetch } from '../custom/asyncThunkFethc' 
const initialState = { heroes: [] }
const heroesSlice = createSlice({
  name: 'reducerHeroes',
  initialState,
  reducers: {
    heroes_fetch(state, action) {
      state.heroes = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(asyncThunkFetch.pending, state => {
        state.heroes = 'PENDING!!!'
      })
      .addCase(asyncThunkFetch.fulfilled, (state, action) => {
        state.heroes = action.payload
      })
      .addCase(asyncThunkFetch.rejected, state => {
        state.heroes = 'REJECT!!!'
      })
      .addMatcher(() => {}) //! similar a finally
      .addDefaultCase(() => {}) //! similar a default case
  }
})
export const { heroes_fetch } = heroesSlice.actions
export default heroesSlice.reducer