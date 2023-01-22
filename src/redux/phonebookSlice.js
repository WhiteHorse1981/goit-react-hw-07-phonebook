import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchContactsDelete,
  fetchContactsAdd,
} from './contacts.thunk';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
      })
      ///////////////////////////////////////////////////////////////////////////////////////////
      .addCase(fetchContactsDelete.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContactsDelete.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        // state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      })
      .addCase(fetchContactsDelete.rejected, (state, action) => {
        state.error = action.payload;
      })
      //////////////////////////////////////////////////////////////////////////////////////
      .addCase(fetchContactsAdd.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContactsAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.contacts.push(action.payload);
      })
      .addCase(fetchContactsAdd.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { filterContact } = phonebookSlice.actions;

export default phonebookSlice.reducer;
