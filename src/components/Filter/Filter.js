import { useSelector, useDispatch } from 'react-redux';
import { phoneActions, phoneSelectors } from 'redux/phonebook';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => phoneSelectors.getFilter(state));
  const dispatch = useDispatch();

  return (
    <div className={styles.findForm}>
      <h2 className={styles.title}>Find contacts:</h2>
      <label className={styles.label}>
        <span className={styles.labelTitle}>find:</span>
        <input
          type="text"
          onChange={e => dispatch(phoneActions.filter(e.target.value))}
          value={value}
          name="filter"
          placeholder="input name"
        />
      </label>
    </div>
  );
};

export default Filter;