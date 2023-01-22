import { configureStore } from '@reduxjs/toolkit';
import phonebookReduser from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReduser,
  },
});
