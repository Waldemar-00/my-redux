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
    const response = await fetch(URL, {
      method,
      headers,
      body
    })
    const data = await response.json()
    return dispatch(actionCreater(data))
  }, [dispatch])
  return {customFetch}
}
export default useFetch