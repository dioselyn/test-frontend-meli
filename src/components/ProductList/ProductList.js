import React from 'react';
import styles from './ProductList.module.sass';
import { formatCurrency } from '../../helpers/formatCurrency';

const ProductList = ({ results }) => {
  if (results?.length === 0) return <p>sin resultados</p>;

  return (
    <ol className={styles.product_list}>
      {results?.map((product) => (
        <li className={styles.product_list_item} key={product.id}>
          <div>
            <a href={`/items/${product.id}`}>
              <img
                src={product?.picture}
                alt={product?.title}
                className={styles.product_list_item_img}
                aria-label={product?.title}
              />
            </a>
          </div>
          <div className={styles.product_list_item_detail}>
            <div className={styles.product_list_item_detail_content}>
              <p className={styles.product_list_item_detail_content_price}>
                $ {formatCurrency(product?.price?.amount)}
              </p>
              <a href={`/items/${product.id}`}>
                <h3>{product?.title}</h3>
              </a>
            </div>
            <div className={styles.product_list_item_detail_condition}>
              <p>{product?.condition}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ProductList;
