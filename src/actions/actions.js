export const article_open = (payload) => {
  return {
    type: 'ARTICLE_OPEN',
    payload: payload
  }
}
export const counter_increment = (payload) => {
  return {
    type: 'COUNTER_INCREMENT',
    payload: payload
  }
} 
export const heroes_fetch = (payload) => {
  return {
    type: 'HEROES_FETCH',
    payload: payload
  }
}
export const add_todo = (payload) => {
  return {
    type: 'ADD_TODO',
    payload: payload
  }
}