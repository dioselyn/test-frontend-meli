import React from 'react';
import styles from './ProductDetail.module.sass';
import product from '../../assets/images/product.webp';

const ProductDetail = () => {
  return (
    <div className={styles.product_detail}>
      <div className={styles.product_detail_img}>
        <img src={product} alt="product" />
      </div>
      <div className={styles.product_detail_price}>
        <p className={styles.product_detail_price_tag}>Nuevo - 23 vendidos</p>
        <h1>titulo</h1>
        <p className={styles.product_detail_price_mount}>$ 1.980,00</p>
        <button className={styles.product_detail_price_button}>Comprar</button>
      </div>
      <div className={styles.product_detail_description}>
        <h3>Descripción del producto</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          blanditiis quia adipisci officia delectus error aut quam ea eveniet
          placeat laborum commodi, nam qui labore quidem. Velit cupiditate illum
          laudantium.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
