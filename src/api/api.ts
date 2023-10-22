import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL, ENDPOINT_PRODUCTS} from 'src/constants/api';
import {Product} from 'src/types/model/product';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: builder => ({
    getProductList: builder.query<Product[], void>({
      query: () => ENDPOINT_PRODUCTS,
    }),
    getProductDetails: builder.query<Product, number>({
      query: id => `${ENDPOINT_PRODUCTS}/${id}`,
    }),
  }),
});
