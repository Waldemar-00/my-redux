import { createAsyncThunk } from "@reduxjs/toolkit"
export const asyncThunkFetch = createAsyncThunk(
    'request/fetchThunk',
  async ({ url, method = 'GET', headers = { 'Content-type': 'application/json' }, body = null }) => {
      try {
        const response = await fetch(url, { method, headers, body })
        const data = await response.json()
        return data  
      } catch (error) {
        console.error(error)
        return error.message
      }
    }
  )