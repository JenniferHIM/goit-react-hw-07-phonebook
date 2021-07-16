import { useSelector, useDispatch } from 'react-redux';
import { phoneActions, phoneSelectors } from 'redux/phonebook';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => phoneSelectors.getFilter(state));
  const dispatch = useDispatch();

  return (
    <div className={s.findForm}>
      <h2 className={s.title}>Find contacts:</h2>
      <label className={s.label}>
        <span className={s.labelTitle}>find:</span>
        <input
          type="text"
          onChange={evt => dispatch(phoneActions.filter(evt.target.value))}
          value={value}
          name="filter"
          placeholder="input name"
        />
      </label>
    </div>
  );
};

export default Filter;