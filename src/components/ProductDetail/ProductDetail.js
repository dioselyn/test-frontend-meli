import styles from './ProductDetail.module.sass';
import { formatCurrency } from '../../helpers/formatCurrency';
import { marked } from 'marked';

const ProductDetail = ({ product }) => {
  return (
    <div className={styles.product_detail}>
      <div className={styles.product_detail_img}>
        <img src={product?.item?.picture} alt="product" />
      </div>
      <div className={styles.product_detail_price}>
        <p className={styles.product_detail_price_tag}>
          {product.item?.condition} - {product.item?.sold_quantity} vendidos
        </p>
        <h1>{product.item?.title}</h1>
        <p className={styles.product_detail_price_mount}>
          $ {formatCurrency(product?.item?.price?.amount)}
          <span>
            {product?.item?.price?.decimals === 0
              ? product?.item?.price?.decimals.toString().padEnd(2, '0')
              : product?.item?.price?.decimals}
          </span>
        </p>
        <button className={styles.product_detail_price_button}>Comprar</button>
      </div>
      <div
        className={styles.product_detail_description}
        id="product_description"
      >
        <h3>Descripción del producto</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(product.item?.description ?? ''),
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
