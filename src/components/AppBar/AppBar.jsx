import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/authSelectors';
import css from './AppBar.module.css';

export const AppBar = () => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
        {authenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
