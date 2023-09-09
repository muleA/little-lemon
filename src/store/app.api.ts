import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'libs/core/axios-basequery';
export const apiSlice = createApi({
  tagTypes: [''],
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
