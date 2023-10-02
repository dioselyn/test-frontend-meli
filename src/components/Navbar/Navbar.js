import { useState } from 'react';
import styles from './Navbar.module.sass';
import logo from '../../assets/images/logo.png';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/items?search=${query}`, { replace: true });
  };

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <a href="/" className={styles.navbar_logo_img}>
          <img src={logo} alt="Logo Mercado Libre" />
        </a>
      </div>
      <div className={styles.navbar_search}>
        <form className={styles.navbar_search_group} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            aria-label="buscar"
            className={styles.navbar_search_group_input}
            value={query}
            onChange={handleChange}
          />
          <button type="submit">
            <FaSearch className={styles.navbar_search_group_icon} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
