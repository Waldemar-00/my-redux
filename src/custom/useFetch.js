import { useCallback } from "react"
import { useDispatch } from "react-redux"
const useFetch = () => {
  const dispatch = useDispatch()
  const customFetch = useCallback(async (
    actionCreater,
    URL,
    method = 'GET',
    headers = { 'Content-type': 'application/json' },
    body = null) => {
    return fetch(URL, {
      method,
      headers,
      body
    }).then(response => response.json()).then(data => dispatch(actionCreater(data)))
  }, [dispatch])
  return {customFetch}
}
export default useFetch