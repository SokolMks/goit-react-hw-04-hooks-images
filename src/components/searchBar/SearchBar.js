import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState("");

  const handleChange = (evt) => {
    setImageName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(imageName);
  };

  return (
    <header className={styles.searchbar}>
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.buttons}>
        <span className={styles.label}>Search</span>
      </button>
      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={imageName}
        onChange={handleChange}
      />
    </form>
  </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;