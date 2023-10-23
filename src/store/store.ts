import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {api} from 'src/api';
import {cartSlice} from './slices/cartSlice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  cart: cartSlice.reducer,
});

export const configureAppStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }).concat(api.middleware),
  });

export const store = configureAppStore();
