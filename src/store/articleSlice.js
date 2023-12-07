const initialState = {
  article: ''
}
const reducerArticle = (state = initialState, action) => {
  switch (action.type) {
    case 'ARTICLE_OPEN': 
      return {
        ...state,
        article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis ea, facilis rerum nihil sapiente fugit assumenda repellat repellendus cum eligendi minima accusantium.Necessitatibus officiis, sint consequatur vero pariatur voluptatibus."
      }  
    default:
      return state
  }
}
export default reducerArticle