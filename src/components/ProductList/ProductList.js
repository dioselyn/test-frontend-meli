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
          <div className={styles.product_list_item_detail_content}>
            <p className={styles.product_list_item_detail_content_price}>
              $ 1.980
            </p>
            <h3>titulo</h3>
          </div>
          <div className={styles.product_list_item_detail_condition}>
            <p>condition</p>
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
        <div className={styles.product_list_item_detail}>
          <div className={styles.product_list_item_detail_content}>
            <p className={styles.product_list_item_detail_content_price}>
              $ 1.980
            </p>
            <h3>titulo</h3>
          </div>
          <div className={styles.product_list_item_detail_condition}>
            <p>condition</p>
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
        <div className={styles.product_list_item_detail}>
          <div className={styles.product_list_item_detail_content}>
            <p className={styles.product_list_item_detail_content_price}>
              $ 1.980
            </p>
            <h3>titulo</h3>
          </div>
          <div className={styles.product_list_item_detail_condition}>
            <p>condition</p>
          </div>
        </div>
      </li>
    </ol>
  );
};

export default ProductList;
