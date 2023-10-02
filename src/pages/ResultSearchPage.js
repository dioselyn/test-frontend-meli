/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ProductList from '../components/ProductList/ProductList';
import useProducts from '../services/useProducts';

const ResultSearchPage = () => {
  const location = useLocation();

  const query = location.search.split('=')[1];
  const { resultQuery, getProductsQuery } = useProducts();

  useEffect(() => {
    getProductsQuery(query);
  }, [query]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Breadcrumbs breadcrumbs={resultQuery.categories} />
        <ProductList results={resultQuery.items} />
      </Container>
    </React.Fragment>
  );
};

export default ResultSearchPage;
