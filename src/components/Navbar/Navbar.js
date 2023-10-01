import styles from './Navbar.module.sass';
import logo from '../../assets/images/logo.png';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <a href="/" className={styles.navbar_logo_img}>
          <img src={logo} alt="Logo Mercado Libre" />
        </a>
      </div>
      <div className={styles.navbar_search}>
        <div className={styles.navbar_search_group}>
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            aria-label="buscar"
            className={styles.navbar_search_group_input}
          />
          <FaSearch className={styles.navbar_search_group_icon} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
