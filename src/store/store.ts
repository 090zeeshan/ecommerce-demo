import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {api} from 'src/api';
import {cartSlice} from './slices/cartSlice';
import {RootState} from 'src/types/store';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  cart: cartSlice.reducer,
});

export const configureAppStore = (initialState?: Partial<RootState>) =>
  configureStore({
    preloadedState: initialState,
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }).concat(api.middleware),
  });

export const store = configureAppStore();
