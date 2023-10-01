import React from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import './sass/styles.sass';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Breadcrumbs />
        <ProductList />
      </Container>
    </React.Fragment>
  );
}

export default App;
