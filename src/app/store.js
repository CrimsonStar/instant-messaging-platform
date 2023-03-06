import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appslice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    app:appReducer,
  },
});
