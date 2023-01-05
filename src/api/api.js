import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "https://netology-trainbooking.netoservices.ru/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://netology-trainbooking.netoservices.ru/",
  }),
  endpoints: (builder) => ({
    getCities: builder.query({
      query: (arg) => `routes/cities?name=${arg}`,
      providesTags: (result, error, arg) => [{ type: "Cities", id: arg }],
    }),
    getRoutes: builder.query({
      query: (args) => `routes?${args}`,
      providesTags: (result, error, args) => [{ type: "Routes", id: args }],
    }),
    getLastRoutes: builder.query({
      query: () => `routes/last`,
      providesTags: (result, error) => [{ type: "LastRoutes" }],
    }),
    getSeats: builder.query({
      query: (args) => {
        let path = `routes/${args.id}/seats`;
        for (let key in args) {
          if (typeof args[key] == "boolean" && key !== "id") {
            path = path + `?${key}=${args[key]}`;
          }
        }
        return path;
      },
      providesTags: (result, error, args) => [{ type: "Seats", id: args }],
    }),
    // updateUser: builder.mutation({
    //   query: ({id, ...body}) => ({
    //     url: `users/${id}`,
    //     method: 'POST',
    //     body,
    //   }),
    //   // invalidatesTags: (result, error, {id}) => [{type: "Users", id}],
    //   async onQueryStarted({id, ...body}, {dispatch, queryFulfilled}) {
    //     console.log(id)
    //     const patchResult = dispatch(
    //         api.util.updateQueryData('getUser', +id, (draft) => Object.assign(draft, body)))
    //     try {
    //       await queryFulfilled
    //     } catch {
    //       patchResult.undo()
    //     }
    //   },
    // }),
  }),
});

export const { useGetRoutesQuery, useGetCitiesQuery, useGetLastRoutesQuery, useGetSeatsQuery } = api;
