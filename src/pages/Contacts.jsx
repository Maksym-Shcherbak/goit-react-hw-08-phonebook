import { Button } from 'components/Button/Button';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contactlist } from 'components/ContactList/ContactList';
import { Modal } from 'components/Modal/Modal';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

const Contacts = () => {
  const [showModal, setShowModal] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = useSelector(selectVisibleContacts);
  const { isLoading, error } = useSelector(selectContacts);
  return (
    <>
      <SearchFilter />
      <Button setModal={setShowModal} />
      <Contactlist
        filteredContacts={filteredContacts}
        isLoading={isLoading}
        error={error}
      />
      {showModal && (
        <Modal setModal={setShowModal}>
          <ContactForm setModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default Contacts;
