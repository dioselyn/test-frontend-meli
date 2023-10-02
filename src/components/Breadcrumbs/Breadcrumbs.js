import React from 'react';
import styles from './Breadcrumbs.module.sass';
import { AiOutlineRight } from 'react-icons/ai';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className={styles.breadcrumbs}>
      <ol className={styles.breadcrumbs_list}>
        {breadcrumbs?.map((breadcrumb, index) => (
          <li className={styles.breadcrumbs_list_item} key={index}>
            <a href="/" aria-label={breadcrumb}>
              {breadcrumb}
            </a>
            <span>
              <AiOutlineRight className={styles.breadcrumbs_list_icon} />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumbs;
