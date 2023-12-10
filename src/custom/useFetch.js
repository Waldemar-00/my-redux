import { useCallback } from "react"
const useFetch = () => {
  const customFetch = useCallback(async (URL, method = 'GET', headers = { 'Content-type': 'application/json' }, body = null) => {
    return fetch(URL, {
      method,
      headers,
      body
    }).then(response => response.json()).then(data => data)
  }, [])
  return {customFetch}
}
export default useFetch