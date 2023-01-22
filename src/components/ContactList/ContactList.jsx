import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ phonebookContacts, handleDelete }) => {
  return (
    <div className={css.wraperContactList}>
      <ul className={css.ContactList}>
        {phonebookContacts.map(contact => (
          <li key={contact.id} className={css.contactListItem}>
            <img src={contact.avatar} alt={contact.name} />
            <p className={css.contactText}>{contact.name}:</p>
            <p className={css.contactText}>{contact.phone}</p>
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
