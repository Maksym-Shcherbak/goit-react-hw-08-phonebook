import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <li id={id} className={css.contactList__item}>
      <img
        className={css.avatar}
        src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        alt="User avatar"
        width="36"
      />
      <span className={css.contactName}>{name}</span>: {number}
      <button
        type="button"
        className={css.contactList__button}
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};
