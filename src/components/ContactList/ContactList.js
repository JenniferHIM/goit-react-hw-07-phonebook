import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phoneOperations, phoneSelectors } from 'redux/phonebook';

import { MdAccountCircle } from 'react-icons/md';
import { CgCloseO } from 'react-icons/cg';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state =>
    phoneSelectors.getVisibleContacts(state),
  );

  useEffect(() => dispatch(phoneOperations.fetchContacts()), [dispatch]);

  // console.log(contacts);

  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, contactName, contactNumber }) => (
        <li key={id} className={styles.item}>
          <MdAccountCircle />
          <span className={styles.name}>{contactName}</span>: {contactNumber}
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => dispatch(phoneOperations.deleteContacts(id))}
          >
            <CgCloseO />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;