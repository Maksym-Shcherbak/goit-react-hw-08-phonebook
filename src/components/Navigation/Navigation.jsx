import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/authSelectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {authenticated && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
