import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/car/carSlice';

export const store = configureStore({
  reducer: {
    car: cartReducer,
  },
});
