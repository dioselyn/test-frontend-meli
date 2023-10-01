import React from 'react';
import styles from './ProductList.module.sass';
import product from '../../assets/images/product.webp';

const ProductList = () => {
  return (
    <ol className={styles.product_list}>
      <li className={styles.product_list_item}>
        <div>
          <a href="/">
            <img
              src={product}
              alt=""
              className={styles.product_list_item_img}
            />
          </a>
        </div>
        <div className={styles.product_list_item_detail}>
          <div>
            <p>$35</p>
            <h2>titulo</h2>
          </div>
          <div>
            <a href="/">Ver producto</a>
          </div>
        </div>
      </li>
      <li className={styles.product_list_item}>
        <div>
          <a href="/">
            <img
              src={product}
              alt=""
              className={styles.product_list_item_img}
            />
          </a>
        </div>
        <div>
          <div className={styles.product_list_item_detail}>
            <div>
              <p>$35</p>
              <h2>titulo</h2>
            </div>
            <div>
              <a href="/">Ver producto</a>
            </div>
          </div>
        </div>
      </li>
    </ol>
  );
};

export default ProductList;
