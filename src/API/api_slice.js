import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api_slice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-dfaa6-default-rtdb.firebaseio.com' }),
  tagTypes: ['heroesAction'],
  endpoints: builder => ({
    getHeroes: builder.query({
      query: () => '/heroes.json',
      providesTags: ['heroesAction']
    }),
    deleteHero: builder.mutation({
      query: (documentId) => ({
        url: `/heroes.json/${documentId}`,
        method: 'DELETE',
        body: documentId
      }),
      invalidatesTags: ['heroesAction']
    })
  })
})

export const { useGetHeroesQuery, useDeleteHeroMutation } = api_slice