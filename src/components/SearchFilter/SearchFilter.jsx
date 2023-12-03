import css from './SearchFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const { enteredName } = useSelector(selectFilter);

  const onHandleChange = e => dispatch(setFilter(e.target.value));

  return (
    <div className={css.searchContact}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <label htmlFor="filter" className={css.filterLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={css.filterInput}
        id="filter"
        value={enteredName}
        onChange={onHandleChange}
      />
    </div>
  );
};
