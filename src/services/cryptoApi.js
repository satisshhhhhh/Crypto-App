import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ed63ea291cmshe88f5a77727576dp17334fjsn3d66238e1e8d'
}

const baseURL = "https://coinranking1.p.rapidapi.com/stats";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({ 
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseURL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;