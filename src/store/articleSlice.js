const initialState = {
  article: ''
}
const reducerArticle = (state = initialState, action) => {
  switch (action.type) {
    case 'ARTICLE_OPEN': 
      return {
        ...state,
        article: action.payload
      }  
    default:
      return state
  }
}
export default reducerArticle