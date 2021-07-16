import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phoneOperations, phoneSelectors } from '../../redux/phonebook';
import { toast } from 'react-toastify';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const contacts = useSelector(state => phoneSelectors.getContacts(state));
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (checkContacts(contacts, contactName)) {
      toast.error(`${contactName} is already in contacts.`);
    } else {
      dispatch(
        phoneOperations.addContacts({
          contactName,
          contactNumber,
        }),
      );

      reset();
    }
  };

  const checkContacts = (arr, target) => {
    return arr.find(
      ({ contactName }) => contactName.toLowerCase() === target.toLowerCase(),
    );
  };

  const changeInput = ({ target: { name, value } }) =>
    name === 'name' ? setContactName(value) : setContactNumber(value);

  const reset = () => {
    setContactName('');
    setContactNumber('');
  };

  return (
    <form className={styles.newContacsForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add new contacts:</h2>
      <label className={styles.label}>
        <span className={styles.labelTitle}>Name:</span>
        <input
          type="text"
          onChange={changeInput}
          value={contactName}
          name="name"
          placeholder="input name"
          required
        />
      </label>
      <label className={styles.label}>
        <span className={styles.labelTitle}>Phone:</span>
        <input
          type="text"
          onChange={changeInput}
          value={contactNumber}
          name="number"
          placeholder="input phone number"
          required
        />
      </label>

      <button type="submit" className={styles.addBtn}>
        Add
      </button>
    </form>
  );
};

export default ContactForm;