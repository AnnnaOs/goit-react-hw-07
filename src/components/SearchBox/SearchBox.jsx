import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.searchBoxContainer}>
      <label className={css.searchBoxLabel}>
        Find contacts by name
        <input
          className={css.searchBoxInput}
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
