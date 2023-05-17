import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { LOCAL_STORAGE_TOKEN } from "../constants";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api",
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).auth.user?.token ||
      localStorage.getItem(LOCAL_STORAGE_TOKEN);

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
