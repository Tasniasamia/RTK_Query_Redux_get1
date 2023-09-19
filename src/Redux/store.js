import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../Redux/Api'; // Import pokemonApi as a named export

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(pokemonApi.middleware),

});
