import React from 'react';
import styles from './Breadcrumbs.module.sass';
import { AiOutlineRight } from 'react-icons/ai';

const Breadcrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <ol className={styles.breadcrumbs_list}>
        <li className={styles.breadcrumbs_list_item}>
          <a href="/">Category 1</a>
        </li>
        <AiOutlineRight className={styles.breadcrumbs_list_icon} />
        <li className={styles.breadcrumbs_list_item}>
          <a href="/">Category 1</a>
        </li>
        <AiOutlineRight className={styles.breadcrumbs_list_icon} />
        <li className={styles.breadcrumbs_list_item}>
          <a href="/">Category 1</a>
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumbs;
