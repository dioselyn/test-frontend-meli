import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBoxPage from './pages/SearchBoxPage';
import ResultSearchPage from './pages/ResultSearchPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './sass/styles.sass';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBoxPage />} />
        <Route
          path="/items"
          query={(search) => {
            return {
              search,
            };
          }}
          element={<ResultSearchPage />}
        />
        <Route path="/items/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
