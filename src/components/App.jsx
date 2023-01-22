import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/phonebookSlice';
import {
  selectorContacts,
  selectorFilter,
  selectorContactsIsloading,
} from 'redux/selector';
import {
  fetchContacts,
  fetchContactsDelete,
  fetchContactsAdd,
} from 'redux/contacts.thunk';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from '../components/App.module.css';

export const App = () => {
  const filter = useSelector(selectorFilter);
  const contacts = useSelector(selectorContacts);
  const isLoading = useSelector(selectorContactsIsloading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContacts = data => {
    if (contacts.findIndex(contact => data.name === contact.name) !== -1) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(fetchContactsAdd(data));
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filterContactsList;
  };

  const handleChange = e => {
    dispatch(filterContact(e.target.value));
  };

  const handleDeleteContacts = contactsId => {
    dispatch(fetchContactsDelete(contactsId));
  };

  return (
    <div className={css.app_style}>
      <h1>Phonebook</h1>
      {isLoading && <p>Please wait...</p>}
      <ContactForm handleSubmit={handleAddContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        phonebookContacts={getFilteredContacts()}
        handleDelete={handleDeleteContacts}
      />
    </div>
  );
};
