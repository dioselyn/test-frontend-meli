import React from 'react';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ProductList from '../components/ProductList/ProductList';

const ResultSearchPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Breadcrumbs />
        <ProductList />
      </Container>
    </React.Fragment>
  );
};

export default ResultSearchPage;
