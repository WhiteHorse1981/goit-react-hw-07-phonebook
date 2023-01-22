import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const contactsApi = axios.create({
  baseURL: 'https://63cc17689b72d2a88e07eeb4.mockapi.io',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchContactsDelete = createAsyncThunk(
  'contacts/fetchContactsDelete',
  async (contactsId, { rejectWithValue, dispatch }) => {
    try {
      //const { data } = await contactsApi.delete(`/contacts/${contactsId}`);
      //return data;
      await contactsApi.delete(`/contacts/${contactsId}`);
      dispatch(fetchContacts());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchContactsAdd = createAsyncThunk(
  'contacts/fetchContactsAdd',
  async (name, { rejectWithValue, dispatch }) => {
    try {
      // const { data } = await contactsApi.post('/contacts', name);
      // return data;
      await contactsApi.post('/contacts', name);
      dispatch(fetchContacts());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
