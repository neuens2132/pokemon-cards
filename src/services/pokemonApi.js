import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pokemonApiHeaders = {
  'X-Api-Key': '',
};

const baseUrl = 'https://api.pokemontcg.io/v2';

const createRequest = (url) => ({ url, headers: pokemonApiHeaders });

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCards: builder.query({
        query: (setId) => createRequest(`/cards?q=set.id:${setId}`),
    }),
    getSets: builder.query({
        query: () => createRequest('/sets'),
    }),
    searchCards: builder.query({
        query: (query) => createRequest(`/cards?q=name:${query}`),
    }),
  }),
});

export const { useGetCardsQuery, useGetSetsQuery, useSearchCardsQuery } = pokemonApi;
