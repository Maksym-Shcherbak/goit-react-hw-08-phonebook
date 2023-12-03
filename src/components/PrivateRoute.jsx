import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectAuthIsLoading,
  selectAuthenticated,
} from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectAuthenticated);
  const isLoading = useSelector(selectAuthIsLoading);
  const shouldRedirect = !isLoggedIn && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
