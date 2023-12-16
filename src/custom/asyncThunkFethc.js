import { createAsyncThunk } from "@reduxjs/toolkit"
export const asyncThunkFetch = createAsyncThunk(
    'reducerHeroes/heroesThunk',
    ({ url, method = 'GET', headers = { 'Content-type': 'application/json' }, body = null }) => {
      return fetch(url, { method, headers, body })
        .then(response => response.json())
        .then(data => data)
    }
  )