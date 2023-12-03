import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';
import { selectUserData } from 'redux/auth/authSelectors';
import { IoIosLogOut } from 'react-icons/io';
import { IconContext } from 'react-icons';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userData.email}</p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        <IconContext.Provider value={{ size: 24, style: { strokeWidth: 25 } }}>
          <IoIosLogOut />
        </IconContext.Provider>
      </button>
    </div>
  );
};
