import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const asyncThunkHeroesSlice = createAsyncThunk(
  'reducerHeroes/heroesThunk',
  () => {
    return fetch('https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json')
      .then(response => response.json())
      .then(data => data)
  }
)
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
      .addCase(asyncThunkHeroesSlice.pending, state => {
        state.heroes = 'PENDING!!!'
      })
      .addCase(asyncThunkHeroesSlice.fulfilled, (state, action) => {
        state.heroes = action.payload
      })
      .addCase(asyncThunkHeroesSlice.rejected, state => {
        state.heroes = 'REJECT!!!'
      })
  }
})
export const { heroes_fetch } = heroesSlice.actions
export default heroesSlice.reducer