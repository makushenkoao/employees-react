import { api } from "./api";
import { TResponseLoginData, TUserData } from "../../types";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TResponseLoginData, TUserData>({
      query: (arg) => ({
        url: "/user/login",
        method: "POST",
        body: arg,
      }),
    }),
    register: builder.mutation<TResponseLoginData, TUserData>({
      query: (arg) => ({
        url: "/user/register",
        method: "POST",
        body: arg,
      }),
    }),
    current: builder.query<TResponseLoginData, void>({
      query: () => ({
        url: "/user/current",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentQuery,
  endpoints: { login, register, current },
} = authApi;