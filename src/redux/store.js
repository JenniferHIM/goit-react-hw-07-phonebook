import { configureStore } from '@reduxjs/toolkit';
import { phoneReducers } from './phonebook';

const store = configureStore({
  reducer: {
    phoneBook: phoneReducers,
  },
});

export default store;