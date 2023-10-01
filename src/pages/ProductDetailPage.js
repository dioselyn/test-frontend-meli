import React from 'react';
import Header from '../components/Header/Header';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Container from '../components/Container/Container';
import ProductDetail from '../components/ProductDetail/ProductDetail';

const ProductDetailPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Breadcrumbs />
        <ProductDetail />
      </Container>
    </React.Fragment>
  );
};

export default ProductDetailPage;
