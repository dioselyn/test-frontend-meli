import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.sass';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
};

export default Header;
