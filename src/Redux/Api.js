import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => '/posts',
    }),
  }),
});

// Corrected destructuring
export const { useGetPostQuery } = pokemonApi;
