import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phoneOperations, phoneSelectors } from 'redux/phonebook';

import { MdAccountCircle } from 'react-icons/md';
import { CgCloseO } from 'react-icons/cg';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state =>
    phoneSelectors.getVisibleContacts(state),
  );

  useEffect(() => dispatch(phoneOperations.fetchContacts()), [dispatch]);

  console.log(contacts);

  return (
    <ul className={s.contacsList}>
      {contacts.map(({ id, contactName, contactNumber }) => (
        <li key={id} className={s.item}>
          <MdAccountCircle />
          <span className={s.name}>{contactName}</span>: {contactNumber}
          <button
            type="button"
            className={s.closeBtn}
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