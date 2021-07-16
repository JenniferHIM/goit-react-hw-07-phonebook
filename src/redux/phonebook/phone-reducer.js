import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { filter } from './phone-actions';
import { fetchContacts, addContacts, deleteContacts } from './phone-operations';

const getContacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContacts.rejected]: (_, action) => action.payload,
  [addContacts.pending]: () => null,
  [deleteContacts.rejected]: (_, action) => action.payload,
  [deleteContacts.pending]: () => null,
});

const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts: getContacts,
  isLoading,
  error,
  filter: filterReducer,
});