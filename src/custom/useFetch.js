import { useCallback } from "react"
import { useDispatch } from "react-redux"
const useFetch = () => {
  const dispatch = useDispatch()
  const customFetch = useCallback(async (
    type,
    URL,
    method = 'GET',
    headers = { 'Content-type': 'application/json' },
    body = null) => {
    return fetch(URL, {
      method,
      headers,
      body
    }).then(response => response.json()).then(data => dispatch({ type: type, payload: data }))
  }, [dispatch])
  return {customFetch}
}
export default useFetch