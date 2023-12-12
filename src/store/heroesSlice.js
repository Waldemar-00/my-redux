import { createSlice } from '@reduxjs/toolkit'
const initialState = { heroes: [] }
// const reducerHeroes = (state = initialState, action) => {
  // switch (action.type) {
    // case 'HEROES_FETCH': 
      // return {
        // ...state,
        // heroes: action.payload
      // }
    // default: 
      // return state
  // }
// }
const heroesSlice = createSlice({
  name: 'reducerHeroes',
  initialState,
  reducers: {
    heroes_fetch(state, action) {
      state.heroes = action.payload
    }
  }
})
export const { heroes_fetch } = heroesSlice.actions
export default heroesSlice.reducer