const initialState = { heroes: [] }
const reducerHeroes = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCH': 
      return {
        ...state,
        heroes: action.payload
      }
    default: 
      return state
  }
}
export default reducerHeroes