import { createSlice } from '@reduxjs/toolkit'
import  { asyncThunkFetch } from '../custom/asyncThunkFethc' 
// export const asyncThunkHeroesSlice = createAsyncThunk(
  // 'reducerHeroes/heroesThunk',
  // ({ url, method = 'GET', headers = { 'Content-type': 'application/json' }, body = null }) => {
    // return fetch(url, { method, headers, body })
      // .then(response => response.json())
      // .then(data => data)
  // }
// )
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
  }
})
export const { heroes_fetch } = heroesSlice.actions
export default heroesSlice.reducer