import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Loader } from 'components/Loader/Loader';

export const Contactlist = ({ filteredContacts, isLoading, error }) => {
  return (
    <div className={css.wrap}>
      <h2 className="contactsTitle">Contacts</h2>
      {isLoading && <Loader />}
      {error && <p>Something went wrong, {error}</p>}
      <ul className={css.contactList}>
        {filteredContacts &&
          !isLoading &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
            ></ContactItem>
          ))}
      </ul>
    </div>
  );
};
