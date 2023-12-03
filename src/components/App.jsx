// import { useDispatch, useSelector } from 'react-redux';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Contactlist } from './ContactList/ContactList';
// import { SearchFilter } from './SearchFilter/SearchFilter';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectModal } from 'redux/contacts/selectors';
// import { Modal } from './Modal/Modal';

// export const App = () => {
//   const dispatch = useDispatch();
//   const showModal = useSelector(selectModal);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <div className="container">
//         <h1 className="phonebookTitle">Phonebook</h1>
//         <SearchFilter />
//         <h2 className="contactsTitle">Contacts</h2>
//         <Contactlist />
//       </div>
//       {showModal && (
//         <Modal>
//           <ContactForm />
//         </Modal>
//       )}
//     </>
//   );
// };
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshThunk } from 'redux/auth/authOperations';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Registration'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isLoading ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
