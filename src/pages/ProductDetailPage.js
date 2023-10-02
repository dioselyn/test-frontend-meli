/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Container from '../components/Container/Container';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import useProducts from '../services/useProducts';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const {
    resultProductById,
    getProductById,
    getCategoryProduct,
    categoryProduct,
  } = useProducts();
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  useEffect(() => {
    getCategoryProduct(resultProductById.item?.title);
  }, [resultProductById]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Breadcrumbs breadcrumbs={categoryProduct} />
        <ProductDetail product={resultProductById} />
      </Container>
    </React.Fragment>
  );
};

export default ProductDetailPage;
