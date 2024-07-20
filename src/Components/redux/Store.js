import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './ModeSlice'; // Import correct path
import todoReducer from './TodoSlice';

export const store = configureStore({
  reducer: {
    togglemode: modeReducer,
    todo:todoReducer
  }
});
