import { useCallback } from "react"
const useFetch = () => {
  const customFetch = useCallback(async (
    dispatch,
    type,
    URL = 'https://admin-panel-fcc34-default-rtdb.firebaseio.com/heroes.json',
    method = 'GET',
    headers = { 'Content-type': 'application/json' },
    body = null) => {
    return fetch(URL, {
      method,
      headers,
      body
    }).then(response => response.json()).then(data => dispatch({ type: type, payload: data }))
  }, [])
  return {customFetch}
}
export default useFetch