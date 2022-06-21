import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RevenuesContext from '../context/RevenuesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const { searchValue, setSearchValue } = useContext(RevenuesContext);
  const history = useHistory();
  const [search, setSearch] = useState(false);

  const hendleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <header>
      <button
        data-testid="profile-top-btn"
        type="button"
        onClick={ () => history.push('/profile') }
        src={ profileIcon }
      >
        <img src={ profileIcon } alt="profileIcon" />
      </button>

      <h1 data-testid="page-title">{title}</h1>
      <button
        data-testid="search-top-btn"
        type="button"
        onClick={ () => setSearch(!search) }
        src={ searchIcon }
      >
        <img src={ searchIcon } alt="searchIcon" />
      </button>

      {
        search && (
          <input
            type="text"
            placeholder="Search"
            value={ searchValue }
            onChange={ (event) => hendleChange(event) }
            data-testid="search-input"
          />
        )
      }
    </header>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  title: PropTypes.string,
}.isRequired;

export default Header;