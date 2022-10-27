import { configureStore } from '@reduxjs/toolkit';
import course from '../features/courses/coursesSlice';

// Store config
export const store = configureStore({
  reducer: {
    course
  },
});

